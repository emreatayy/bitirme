import {useEffect, useState} from "react";
import axiosClient from "../axios.js";
import {useStateContext} from "../context/ContextProvider.jsx";
import {Link, Navigate, useLocation} from "react-router-dom";
import "../components/layout/styles/sa.css";

export default function Lesson(){
    const uri = useLocation().pathname;
    const { categories, setCategories, author, setAuthor, lesson, setLesson} = useStateContext();
    const [errorCode, setErrorCode] = useState("");

    useEffect(() => {
        axiosClient.get(`${uri}`)
            .then(({data})  => {
                setLesson(data.lesson);
                setAuthor(data.lesson.user)
                setCategories(data.categories)
            })
            .catch((error) =>{
                setErrorCode(error.response.status);
            });
    }, [])
    if(errorCode === 404){
        return <Navigate to="/*" />
    }
    return(

        <div>
            <div>
                {categories.map((category, index) => {
                    return (
                        <div  key={index}>
                            <Link className="link" to={"/category/"+category.slug} >Category Name: {category.name}</Link>
                        </div>
                    );
                })}
            </div>
            Title: {lesson.title}<br/>
            Excerpt: {lesson.excerpt}<br/>
            <Link to={"/lessons?teacher="+author.username}>Author: {author.name+" "+author.surname}</Link>
        </div>
    )
}
