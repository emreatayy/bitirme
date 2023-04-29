import { Link } from "react-router-dom";
import {useId, useState} from "react";
import axiosClient from '../axios.js'
import {useStateContext} from "../context/ContextProvider.jsx";


export default function Signup() {
    const { setUser, setToken } = useStateContext();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [nameErrors, setNameError] = useState({ __html: "" });
    const [surnameErrors, setSurnameError] = useState({ __html: "" });
    const [usernameErrors, setUsernameError] = useState({ __html: "" });
    const [emailErrors, setEmailError] = useState({ __html: "" });
    const [passwordErrors, setPasswordError] = useState({ __html: "" });

    function label(id){
       const element = document.getElementById(id);
        if(element){
        element.style = "    top: -20px;" +
                        "    left: 0;\n" +
                        "    color: #078807;\n" +
                        "    font-size: 12px;";
        }
    }
    const onSubmit = (ev) => {
        ev.preventDefault();
        setNameError({ __html: "" });
        setSurnameError({ __html: "" });
        setUsernameError({ __html: "" });
        setPasswordError({ __html: "" });
        setEmailError({ __html: "" });


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
                setUser(data.user)
                setToken(data.token)
            })
            .catch((error) => {
                if (error.response.data.errors.email) {
                    const emailErrors = error.response.data.errors.email.join('<br>')
                    setEmailError({__html: emailErrors});
                }
                if (error.response.data.errors.name) {
                    const nameErrors = error.response.data.errors.name.join('<br>')
                    setNameError({__html: nameErrors});
                }
                if (error.response.data.errors.surname) {
                const surnameErrors = error.response.data.errors.surname.join('<br>')
                setSurnameError({__html: surnameErrors});
                }
                if (error.response.data.errors.username) {
                    const usernameErrors = error.response.data.errors.username.join('<br>')
                    setUsernameError({__html: usernameErrors});
                }
                    if (error.response.data.errors.password) {
                        const passwordErrors = error.response.data.errors.password.join('<br>')
                        setPasswordError({__html: passwordErrors});
                    }

            });
    };

    return(

        <div className="login-box">
            <h2>Kayıt Ol</h2>
            <form onSubmit={onSubmit} method="post">
                {nameErrors && (<p dangerouslySetInnerHTML={nameErrors}></p>)}
                <div className="user-box">
                    <input id="name" type="text" name="" required=""
                           onChange={ev => setName(ev.target.value)& label('nameLabel') }/>
                    <label id="nameLabel"  className="label">İsim</label>
                </div>
                {surnameErrors && (<p dangerouslySetInnerHTML={surnameErrors}></p>)}
                <div className="user-box">
                    <input id="surname" type="text" name="" required=""
                           onChange={ev => setSurname(ev.target.value) & label('surnameLabel')}/>
                    <label id="surnameLabel"  className="label">Soyisim</label>
                </div>
                {usernameErrors && (<p dangerouslySetInnerHTML={usernameErrors}></p>)}
                <div className="user-box">
                    <input id="username" type="text" name="" required=""
                           onChange={ev => setUsername(ev.target.value)& label('usernameLabel')}/>
                    <label id="usernameLabel"  className="label">Kullanıcı Adı</label>
                </div>
                {emailErrors && (<p dangerouslySetInnerHTML={emailErrors}></p>)}
                <div className="user-box">
                    <input id="email" type="email" name="" required=""
                           onChange={ev => setEmail(ev.target.value)& label('emailLabel')}/>
                    <label id="emailLabel"  className="label">E-mail</label>
                </div>
                {passwordErrors && (<p dangerouslySetInnerHTML={passwordErrors}></p>)}
                <div className="user-box">
                    <input id="password" type="password" name="" required=""
                           onChange={ev => setPassword(ev.target.value)& label('passwordLabel')}/>
                    <label id="passwordLabel"  className="label">Parola</label>
                </div>
                <p></p>
                <div className="user-box">
                    <input type="password" name="" required=""
                           onChange={ev => setPasswordConfirmation(ev.target.value)& label('passConLabel')}/>
                    <label id="passConLabel" className="label">Parola Tekrar</label>
                </div>
                <button type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    kAYIT OL
                </button>
                <Link to="/Login">Hesabınız var mı?</Link>
            </form>
        </div>
    );
}
