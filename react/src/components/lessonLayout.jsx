import "../styles/lessonsLayout.css"
import React, {useEffect, useState} from "react";
import ReactPlayer from "react-player";
import {useStateContext} from "../context/ContextProvider.jsx";
import axiosClient from "../axios.js";
import {number} from "prop-types";

export default function lessonLayout() {
  const url = parseInt(window.location.href.substring(30));
  const {
    user,
    setUser,
    lectureClasses,
    setLectureClasses,
    lessons,
    setLessons,
    lectureVideos,
    setLectureVideos,
    videos,
    setVideos
  } = useStateContext()
  useEffect(() => {
    axiosClient.get('/me')
      .then(({data}) => {
        setUser(data)
      })
  }, []);
  useEffect(() => {
    axiosClient.get('/lessons')
      .then(({data}) => {
        setLessons(data)
      })
  }, []);
  useEffect(() => {
    axiosClient.get('/lecture_classes')
      .then(({data}) => {
        setLectureClasses(data)
      })
  }, []);
  useEffect(() => {
    axiosClient.get('/lecture_videos')
      .then(({data}) => {
        setLectureVideos(data)
      })
  }, []);
  useEffect(() => {
    axiosClient.get('/videos')
      .then(({data}) => {
        setVideos(data)
      })
  }, []);

  let myLesson = {};
  lessons.map(x => {
      if (x.id === url) {
        myLesson = x;
      }
    }
  );
  let myLect = [];//id lesson id title excerpt
  lectureClasses.map(lect => {
    if (myLesson.id === lect.lesson_id) {
      myLect.push(lect);
    }
  })
  let lectVideos = []; //Bölümün tüm videoları lecture_id video_id
  lectureVideos.map(x => {
    lectVideos.push(x);
  })


  const myVideos = [];
  myLect.map((lect) => {
    {
      lectVideos.map((lectVid) => {
        if (lectVid.lecture_id === lect.id) {
          videos.map((vid) => {
            if (vid.id === lectVid.video_id) {
              myVideos.push({id: lect.id, link: vid.link})
            }
          })
        }
      })
    }
  })

  const [selectedVideo, setSelectedVideo] = useState("");
  const setVid = (ev) => {
    setSelectedVideo(ev.target.getAttribute("url"))
  }
  const selectVideo = myLect.map((list) =>
    <li>
      <input type="radio" name="accordion" id={list.id}/>
      <label className="label" htmlFor={list.id}>{list.title}</label>
      <div className="content">
        {
          myVideos.map((vid) => {
              if (list.id === vid.id) {
                return (
                  <button url={vid.link} onClick={setVid}>
                    Video
                  </button>
                )
              }
            }
          )
        }
      </div>
    </li>
  );
  return (
    <>
      {lessons[1] === undefined ? (
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
              <div className="lessText">Hoşgeldin</div>
              <div className="lessVideoPlayer">
                <ReactPlayer url={selectedVideo} controls={true} width="1100px" height="600px"/>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

