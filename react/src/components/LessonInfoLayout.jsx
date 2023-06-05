import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/ContextProvider.jsx";
import axiosClient from "../axios.js";
import "../styles/loadingAnimation.css";

export default function LessonInfoLayout() {
  const url = window.location.href.substring(34);
  const { lessons, setLessons, userClasses, setUserClasses } = useStateContext();
  useEffect(() => {
    axiosClient.get('/lessons').then(({ data }) => {
      setLessons(data);
    });
  }, []);

  const myLesson = lessons[url - 1];

  return (
    <>
      {myLesson === undefined ? (
        <div className="loader"></div>
      ) : (
        <>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="flex flex-col items-center">
              <div className="border-b border-gray-200 mb-4 pb-4">
                <img
                  src={myLesson.thumbnail}
                  alt="x"
                  className="w-40 h-40 rounded-full mx-auto"
                />
                <h2 className="text-3xl font-bold text-gray-800 mt-4">
                  {myLesson.title}
                </h2>
              </div>
              <div className="border-b border-gray-200 py-4">
                <p className="text-lg font-bold text-gray-600">
                  Öğretmen: {myLesson.teacher}
                </p>
              </div>
              <div className="py-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/odlRp1vpsXk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-200"></div>
            <dl className="divide-y divide-gray-200">
              <div className="py-3">
                <dt className="text-lg font-bold leading-6 text-gray-900">
                  Eğitim
                </dt>
                <dd className="mt-1 text-lg leading-6 text-gray-700">
                  {myLesson.slug}
                </dd>
              </div>
              <div className="py-3">
                <dt className="text-lg font-bold leading-6 text-gray-900">
                  Kazanım
                </dt>
                <dd className="mt-1 text-lg leading-6 text-gray-700">
                  {myLesson.outcome}
                </dd>
              </div>
              <div className="py-3">
                <dt className="text-lg font-bold leading-6 text-gray-900">
                  Kayıt Olmak İster misiniz?
                </dt>
                <dd className="mt-1 text-lg leading-6 text-gray-700">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Kayıt Ol
                  </button>
                </dd>
              </div>
            </dl>
          </div>
        </>
      )}
    </>
  );
}
