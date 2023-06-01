import {useStateContext} from "../context/ContextProvider.jsx";
import axiosClient from "../axios.js";
import React, {useEffect, useState} from "react";
import {Link, Navigate, useLocation} from "react-router-dom";
import Default from "../components/Default.jsx";
import Guest from "../components/Guest.jsx";


export default function Lesson(){
  const {
    lessons,
    setLessons,
    role,
    token
  } = useStateContext()
  const [kontrol, setKontrol] = useState(false);
  const [errorCode, setErrorCode] = useState(200);
  const [myFavorites, setMyFavorites] = useState(false);

  function favorite(slug){
    axiosClient.post(`/favorite`, {
      slug
    })}

const uri = useLocation().pathname;
  useEffect(() => {
    axiosClient.get(`${uri}`)
      .then(({data})  => {
        setLessons(data);
        setKontrol(true);
      })
      .catch((error) =>{
        setErrorCode(error.response.status);
      });
  }, []);
  if(errorCode === 404){
    return <Navigate to="/*" />
  }
  if(!token) {
    return (
      <Guest>
        {kontrol ? (
          <div>
            <Link type="submit" to="/login">
              Dersi favorilerinize eklemek için giriş yapın.
            </Link>
            <p>Öğretmen: {lessons.user.name + " " + lessons.user.surname}</p>
            <p>Title: {lessons.lesson.title}</p>
            <p>Excerpt: {lessons.lesson.excerpt}</p>
            {lessons.categories.map((category => {
              return (
                <p>Kategori: {category.name}</p>
              )
            }))}
            {lessons.lectures.map((lecture => {
              return (
                <>
                  <p>Bölüm: {lecture.lecture.title}</p>
                  {lecture.videos.map((video) => {
                    return (<p>{video.title}</p>)
                  })}
                </>
              )
            }))}
          </div>
        ) : (
          <div className="loader"></div>
        )}
      </Guest>
    )
  }
  if(role == 0){
    async function isFavorite() {
      useEffect(() => {
        axiosClient.get('/MyFavorites', {
        })
          .then(({data}) => {
            console.log(data)
          })
      })
    }
    return (
      <Default>
        {kontrol ? (
          <div>
            {isFavorite()}
            <button type="submit" onClick={() => favorite(lessons.lesson.slug)}>
              favorilere ekle
            </button><br/>
            <Link to={"/lesson/content/"+lessons.lesson.slug}>Ders içeriğine eriş</Link>
            <p>Öğretmen: {lessons.user.name + " " + lessons.user.surname}</p>
            <p>Title: {lessons.lesson.title}</p>
            <p>Excerpt: {lessons.lesson.excerpt}</p>
            {lessons.categories.map((category => {
              return (
                <p>Kategori: {category.name}</p>
              )
            }))}
            {lessons.lectures.map((lecture => {
              return (
                <>
                  <p>Bölüm: {lecture.lecture.title}</p>
                  {lecture.videos.map((video) => {
                    return (<p>{video.title}</p>)
                  })}
                </>
              )
            }))}
          </div>
        ) : (
          <div className="loader"></div>
        )}
      </Default>
    )
  }
}
