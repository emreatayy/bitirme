import {useStateContext} from "../context/ContextProvider.jsx";
import React, {useEffect, useState} from "react";
import axiosClient from "../axios.js";
import {Link, Navigate} from "react-router-dom";
import "../styles/lessons.css"
import "../styles/loadingAnimation.css"

//Sadece Öğrenciler Girebilir
export default function Lessons() {
  const {user, setUser, userClasses, setUserClasses, lessons, setLessons} = useStateContext()
  useEffect(() => {
    axiosClient.get('/me')
      .then(({data}) => {
        setUser(data)
      })
    axiosClient.get('/user_classes')
      .then(({data}) => {
        setUserClasses(data)
      })
    axiosClient.get('/lessons')
      .then(({data}) => {
        setLessons(data)
      })
  }, [])

  const myId = user.id;
  const myLessonsId = [];
  const myLessons = []

  userClasses.map(x => {
    if (myId === x.user_id) {
      myLessonsId.push(x.lessons_id);
    }
  })


  lessons.map(x => {
    myLessonsId.map(y => {
      if (x.id === y) {
        myLessons.push(x)
      }
    })
  })

  if (user.role !== 0) {
    return <Navigate to="/"/>
  } else {
    return (
      <>
        {lessons[1] === undefined ? (
          <div className="loader"></div>
        ) : (
          <>
            <div className="lessonsContainer">
              <div className="bg-white w-full">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                  <div
                    className="grid grid-cols-8 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-12">
                    {myLessons.map((lesson) => (
                      <a key={lesson.id} href={"lessons/" + lesson.id} className="group">
                        <div
                          className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                          <img
                            src={lesson.thumbnail}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                            alt="zaa"/>
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">{lesson.title}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">{lesson.slug}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    )
  }
}
