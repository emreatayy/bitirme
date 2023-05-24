import {useStateContext} from "../context/ContextProvider.jsx";
import React, {useEffect, useState} from "react";
import axiosClient from "../axios.js";
import resim from "../assets/baydırman.jpeg";
import {Link, Navigate, useLocation} from "react-router-dom";
import "../components/layout/styles/as.css";

export default function lessons() {
  const {lessons, setLessons} = useStateContext();
    const [kontrol, setKontrol] = useState(false);
    const uri = window.location.search;
  useEffect(() => {
      axiosClient.get(`/lessons${uri}`)
          .then(({data})  => {
              setLessons(data);
              setKontrol(true);
          });
  }, []);
  const onClick =  (link)  => {
      console.log(link)
      return <Navigate to={link} />
    };
      return (
          <div className="mainPage">
              <h1>Eğitimler</h1>
              {kontrol ? (
                  lessons[0]!=null ? (
                      <ul className="cards">
                          {lessons.map((lesson, index) => {
                              return (
                                  <div key={index}>
                                      <li className="cards_item">
                                          <div className="card">
                                              <div className="card_image"><img src={resim} alt="baydrıman"/></div>
                                              <div className="card_content">
                                                  {lesson.categories.map((category, index) => {
                                                      return (
                                                          <div key={index}>
                                                              <Link className="link" to={"?category=" + category.slug}>
                                                                  <p>Category Name: {category.name}</p>
                                                              </Link>
                                                          </div>
                                                      );
                                                  })}
                                                  <h2 className="card_title">{lesson.lesson.title}</h2>
                                                  <p className="card_text">{lesson.lesson.excerpt}</p>
                                                  <button onClickCapture={onClick("/lessons?teacher=" + lesson.lesson.user.username)}
                                                          className="btn card_btn">
                                                      <p className="card_text">
                                                      {lesson.lesson.user.name+" "+lesson.lesson.user.surname}</p>
                                                  </button>
                                                  <button className="btn card_btn">
                                                      <Link className="link"
                                                            to={"/lesson/" + lesson.lesson.slug}>İncele</Link>
                                                  </button>
                                              </div>
                                          </div>
                                      </li>
                                  </div>
                              );
                          })}
                      </ul>
                  ):(
                      <h6 className="text-center">Aradığınız eğitimler bulunamadı.</h6>
                  )
              ) : (
                <h6 className="text-center">Lütfen Bekleyiniz.</h6>
              )}
          </div>
      )
}
