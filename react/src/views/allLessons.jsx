import React, {useEffect, useState} from "react";
import "../styles/lessons.css"
import {useStateContext} from "../context/ContextProvider.jsx";
import axiosClient from "../axios.js";
import {Navigate} from "react-router-dom";
import Guest from "../components/Guest.jsx";
import Default from "../components/Default.jsx";
import Teacher from "../components/Teacher.jsx";

export default function allLessons() {
  const {user, role, token, lessons, setLessons} = useStateContext()
  const [kontrol, setKontrol] = useState(false);
  const [favorites, setFavorites] = useState(null);
  const uri = window.location.search;
  function favorite(slug){
    axiosClient.post(`/favorite`, {
      slug
    })}
  useEffect(() => {
    axiosClient.get(`/lessons${uri}`)
      .then(({data}) => {
        setLessons(data)
        setKontrol(true)
      })
  }, [])
  const [open, setOpen] = useState(true)
  function onSubmit(link){
    window.location.search = link;
  }
  if (!token) {
    return (
        <Guest>
          <div className="lessonsContainer">
            <div className="bg-white w-full">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                {kontrol ? (
                  lessons[0] != null ? (
                    <div
                      className="grid grid-cols-8 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-12">
                      {lessons.map((lesson) => (
                        <div className="group">
                          <div
                            className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img
                              src={lesson.lesson.thumbnail}
                              className="h-full w-full object-cover object-center group-hover:opacity-75"
                              alt="zaa"/>
                          </div>
                          {lesson.categories.map((category, index) => {
                            return (
                              <button className="border border-blue-200 rounded m-1 text-xs
                          bg-blue-700 text-white hover:bg-blue-900 p-1"
                                      onClick={() => onSubmit("?category=" + category.slug)}>
                                {category.name}
                              </button>
                            );
                          })}
                          <a href={"/lesson/"+lesson.lesson.slug}>
                            <h3 className="mt-4 text-sm text-gray-700">{lesson.lesson.title}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{lesson.lesson.excerpt}</p>
                          </a>
                        </div>
                      ))}
                    </div>):(
                    <h2 className="text-center">Aradığınız eğitim bulunamadı.</h2>
                  )
                ): (
                  <div className="loader"></div>)
                }
              </div>
            </div>
          </div>
        </Guest>
    )
  }
if(role == 0){
    return (
      <>
        <Default>
          <div className="lessonsContainer">
            <div className="bg-white w-full">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                {kontrol ? (
                  lessons[0] != null ? (
                    <div
                      className="grid grid-cols-8 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-12">
                      {lessons.map((lesson) => (
                        <div className="group">
                          <div
                            className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img
                              src={lesson.lesson.thumbnail}
                              className="h-full w-full object-cover object-center group-hover:opacity-75"
                              alt="zaa"/>
                          </div>
                          {lesson.categories.map((category, index) => {
                            return (
                              <button className="border border-blue-200 rounded m-1 text-xs
                          bg-blue-700 text-white hover:bg-blue-900 p-1"
                                      onClick={() => onSubmit("?category=" + category.slug)}>
                                {category.name}
                              </button>
                            );
                          })}
                          <a href={"/lesson/"+lesson.lesson.slug}>
                            <h3 className="mt-4 text-sm text-gray-700">{lesson.lesson.title}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{lesson.lesson.excerpt}</p>
                          </a>
                        </div>
                      ))}
                    </div>):(
                    <h2 className="text-center">Aradığınız eğitim bulunamadı.</h2>
                  )
                ): (
                  <div className="loader"></div>)
                }
              </div>
            </div>
          </div>
        </Default>
      </>
    )
  }
  else if(role == 1){
    return (
      <>
        <Teacher>
          <div className="lessonsContainer">
            <div className="bg-white w-full">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                {kontrol ? (
                  lessons[0] != null ? (
                    <div
                      className="grid grid-cols-8 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-12">
                      {lessons.map((lesson) => (
                        <a key={lesson.lesson.id} href={"lesson/" + lesson.lesson.slug} className="group">
                          <div
                            className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img
                              src={lesson.lesson.thumbnail}
                              className="h-full w-full object-cover object-center group-hover:opacity-75"
                              alt="zaa"/>
                          </div>
                          {lesson.categories.map((category, index) => {
                            return (
                              <button className="border border-blue-200 rounded m-1 text-xs
                          bg-blue-700 text-white hover:bg-blue-900 p-1"
                                      onClick={() => onSubmit("?category=" + category.slug)}>
                                {category.name}
                              </button>
                            );
                          })}
                          <h3 className="mt-4 text-sm text-gray-700">{lesson.lesson.title}</h3>
                          <p className="mt-1 text-lg font-medium text-gray-900">{lesson.lesson.excerpt}</p>
                        </a>
                      ))}
                    </div>):(
                    <h2 className="text-center">Aradığınız eğitim bulunamadı.</h2>
                  )
                ): (
                  <div className="loader"></div>)
                }
              </div>
            </div>
          </div>
        </Teacher>
      </>
    )
  } else {
    return <Navigate to="/home"/>
}
}
