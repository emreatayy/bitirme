import { Link } from "react-router-dom";
import { useState } from "react";
import axiosClient from '../axios.js'
import {useStateContext} from "../context/ContextProvider.jsx";


export default function Signup() {
    const { setCurrentUser, setUserToken } = useStateContext();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState({ __html: "" });

    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });


        axiosClient
            .post("/signup", {
                email,
                name,
                surname,
                username,
                password,
                password_confirmation: passwordConfirmation,
            })
            .then(({ data }) => {
                setCurrentUser(data.user)
                setUserToken(data.token)
            })
            .catch((error) => {
                console.log(error)
                if (error.response) {

                    const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], [])
                    console.log(finalErrors)
                    setError({__html: finalErrors.join('<br>')})
                }
                console.error(error)
            });
    };

    return(
        <div className="login-box">
            <h2>Signup</h2>
            {error.__html && (<p className="bg-red-500 rounded py-2 px-3 text-white" dangerouslySetInnerHTML={error}>
            </p>)}
            <form onSubmit={onSubmit} method="post">
                <div className="user-box">
                    <input id="name" type="text" name="" required=""
                           onChange={ev => setName(ev.target.value)}/>
                    <label className="label">Name</label>
                </div>
                <div className="user-box">
                    <input id="surname" type="text" name="" required=""
                           onChange={ev => setSurname(ev.target.value)}/>
                    <label className="label">Surname</label>
                </div>
                {username}
                <div className="user-box">
                    <input id="username" type="text" name="" required=""
                           onChange={ev => setUsername(ev.target.value)}/>
                    <label className="label">Username</label>
                </div>
                <div className="user-box">
                    <input id="email" type="email" name="" required=""
                           onChange={ev => setEmail(ev.target.value)}/>
                    <label className="label">Email Adress</label>
                </div>
                <div className="user-box">
                    <input id="password" type="password" name="" required=""
                           onChange={ev => setPassword(ev.target.value)}/>
                    <label className="label">Password</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required=""
                           onChange={ev => setPasswordConfirmation(ev.target.value)}/>
                    <label className="label">Password Confirm</label>
                </div>
                <button type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </button>
                <Link to="/Login">Already have an account?</Link>
            </form>
        </div>
    );
}
