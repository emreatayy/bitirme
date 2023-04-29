import {useEffect} from "react";
import axiosClient from "../axios.js";
import {useStateContext} from "../context/ContextProvider.jsx";
import {Link} from "react-router-dom";

export default function Lessons(){
    const { lessons ,setLessons} = useStateContext()
    useEffect(() => {
        axiosClient.get('/home')
            .then(({data})  => {
                setLessons(data);
            });
    }, [])
    return(
        <div>
            {lessons.map((lesson, index) => {
                return (
                    <div key={index}>
                        <Link className="link" to={"/lesson/"+lesson.slug} >Title: {lesson.title}</Link>
                        <h2>Excerpt: {lesson.excerpt}</h2>

                        <hr />
                    </div>
                );
            })}
        </div>
    )
}
