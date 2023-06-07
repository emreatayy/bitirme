import "../styles/lessonsLayout.css"
import "../styles/403.css"
import React, {useEffect, useState} from "react";
import ReactPlayer from "react-player";
import {useStateContext} from "../context/ContextProvider.jsx";
import axiosClient from "../axios.js";
import {Link, Navigate, useLocation} from "react-router-dom";
import {useTimer} from "react-timer-hook";


export default function lessonLayout() {
  const uri = useLocation().pathname;
  const {
    lessons,
    setLessons
  } = useStateContext();

  const [errorCode, setErrorCode] = useState("");
  const [kontrol, setKontrol] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [link, setLink] = useState("");

  const url ="";
  useEffect(() => {
    axiosClient.get(`${uri}`)
      .then(({data})  => {
        setLessons(data);
        setKontrol(true);
      })
      .catch((error) =>{
        setErrorCode(error.response.status);
        if(error.response.status === 403){
          setLink(error.response.data)
        }
      });
  }, []);
  function MyTimer({ expiryTimestamp }) {
    const {
      seconds
    } = useTimer({ expiryTimestamp,
      onExpire: () => window.location.pathname = "/lesson/"+link});
  return(
    seconds
  );}

  if (errorCode === 403) {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 5);
    return (
      <div className="message">
        <p className="content">BU İÇERİĞE ERİŞMEK İÇİN FAVORİLERE EKLEMELİSİNİZ.</p>
        <p className="info">İÇERİĞE YÖNLENDİRİLİYORSUNUZ... <MyTimer expiryTimestamp={time}/></p>
      </div>
    )
  }
  if (errorCode === 404) {
    return <Navigate to="/*"/>
  }

if(kontrol) {

  const setVid = (ev) => {
    setSelectedVideo(ev.target.getAttribute("url"))
    setVideoTitle(ev.target.getAttribute("title"))
  }
  const selectVideo = lessons.lectures.map((list) =>
    <li>
      <input type="radio" name="accordion" id={list.lecture.id}/>
      <label className="label" htmlFor={list.lecture.id}>{list.lecture.title}</label>
      <div className="content">
        {
          list.videos.map((vid) => {
                return (
                  <button url={vid.link} title={vid.title} onClick={setVid}>
                    {vid.title}
                  </button>
                )
            }
          )
        }
      </div>
    </li>
  );
  return (
    <div className="lessbody">
      {lessons.lesson === undefined ? (
        <div className="loader"></div>
      ) : (
        <>
          <div className="lessonCont">
            <div className="lessMenu">
              <ul className="accordion">
                {selectVideo}
              </ul>
            </div>
            <div className="lessVideo">
              <div className="lessNav">
                <Link to="/home">ANASAYFA</Link>
                <Link to={"/lesson/"+lessons.lesson.slug}>DERSE DÖN</Link>
                <Link to={"/lessons?teacher="+lessons.user.username}>EĞİTMENİN DİĞER DERSLERİ</Link>
              </div>
              <div className="lessText">Hoşgeldin</div>
              <h2 className="text-white text-xl">{videoTitle}</h2>
              <div className="lessVideoPlayer">
                <ReactPlayer url={selectedVideo} controls={true} width="1100px" height="600px"/>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
}

