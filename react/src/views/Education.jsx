import React, {useEffect, useState} from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import resim from "../assets/baydırman.jpeg";
import {Link} from "react-router-dom";
import axiosClient from "../axios.js";

export default function lessons() {
    const [favorites, setFavorites] = useState(null);
    const [kontrol, setKontrol] = useState(false);

    useEffect(() => {
        axiosClient.get('/MyFavorites')
            .then(({data}) =>{
                setFavorites(data);
                setKontrol(true);
            })
    }, []);

    return (
        <div className="mainPage">
            <h1>Eğitimler</h1>
            {kontrol ? (
                lessons[0] != null ? (
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
                                                            <button className="link"
                                                                    onClick={() => onSubmit("?category=" + category.slug)}>
                                                                <p>Category Name: {category.name}</p>
                                                            </button>
                                                        </div>
                                                    );
                                                })}
                                                <h2 className="card_title">{lesson.lesson.title}</h2>
                                                <button type="submit" onClick={() =>favorite(lesson.lesson.slug)}>
                                                    favorilere ekle
                                                </button>
                                                <p className="card_text">{lesson.lesson.excerpt}</p>
                                                <button onClick={() => onSubmit("?teacher="+lesson.lesson.user.username)}
                                                        className="btn card_btn">
                                                    <p className="card_text">
                                                        {lesson.lesson.user.name + " " + lesson.lesson.user.surname}</p>
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
                ) : (
                    <h6 className="text-center">Aradığınız eğitimler bulunamadı.</h6>
                )
            ) : (
                <h6 className="text-center">Lütfen Bekleyiniz.</h6>
            )}
        </div>
    )
}
