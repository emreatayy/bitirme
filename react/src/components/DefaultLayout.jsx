import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider.jsx";
import axiosClient from "../axios.js";
import {useEffect} from "react";
import css from "../home.css?inline";
css


export default function DefaultLayout(){

    const { user, token, lessons, setUser, setToken, setLessons} = useStateContext()

    if (!token){
        return  <Navigate to="/login" />
    }
    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient.post("/logout").then((res) => {
            setUser({});
            setToken(null);
        });
    };
    useEffect(() => {
        axiosClient.get('/me')
            .then(({ data }) => {
                setUser(data)
            })
    }, [])



    return(
        <div id="defaultLayout">
            <aside>
                <Link className="link" to="/lessons" >Dashboard</Link>
                <Link className="link" to="/users" >Users</Link>
                <div>
                    <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
                </div>
            </aside>
            <div className="content">
                <header>
                    <div>
                        Header
                    </div>
                    <p>{user.name} {user.surname}</p>
                    <div>

                    </div>
                </header>
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}
