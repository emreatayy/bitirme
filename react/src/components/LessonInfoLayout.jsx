import React, {useEffect, useState} from "react";
import {useStateContext} from "../context/ContextProvider.jsx";
import axiosClient from "../axios.js";
import "../styles/loadingAnimation.css"

export default function LessonInfoLayout() {
  const url = window.location.href.substring(34);
  const {lessons, setLessons,userClasses,setUserClasses} = useStateContext()
  useEffect(() => {
    axiosClient.get('/lessons')
      .then(({data}) => {
        setLessons(data)
      })
  }, []);



  const myLesson = lessons[url - 1];

  return (
    <>
      {myLesson === undefined ? (
        <div className="loader"></div>

      ) : (
        <>
          <div className="bg-white p-3">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Eğitim Bilgileri</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <img src={myLesson.thumbnail} alt="x" className="w-1/6"/></dd>

            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Eğitim İsmi</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{myLesson.title}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Eğitim İçeriği</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{myLesson.excerpt}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Eğitim Slug</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{myLesson.slug}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Kayıt Olmak İster misiniz?</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Kayıt Ol</button>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </>
      )}
    </>
  )
}
