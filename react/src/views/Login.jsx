import {Link} from "react-router-dom";
import {useState} from "react";
import axiosClient from "../axios.js";
import {useStateContext} from "../context/ContextProvider.jsx";


export default function Login(){
    const { setUser, setToken } = useStateContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({__html: ""});

    function label(id){
        const element = document.getElementById(id);
        if(element){
            element.style = "    top: -20px;" +
                "    left: 0;\n" +
                "    color: #078807;\n" +
                "    font-size: 12px;";
        }
    }
    const onSubmit =(ev) =>{
        ev.preventDefault();
        setError({ __html: "" });

        axiosClient
            .post("/login", {
                email,
                password,
            })
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token)
            })
            .catch((error) => {
                if (error.response.data.errors) {
                    const finalErrors = Object.values(error.response.data.errors);
                    setError({__html: finalErrors.join("<br>")});
                }
                else if(error.response.data.error)
                {
                    const finalErrors = error.response.data.error;
                    setError({__html: finalErrors});
                }
            });
    };

    return(
        <div className="login-box">
            <h2>Giriş Yap</h2>
            {error.__html && (<p dangerouslySetInnerHTML={error}></p>)}
            <form onSubmit={onSubmit}>
                <div className="user-box">
                    <input id="email" type="text" name="" required=""
                           onChange={ev => setEmail(ev.target.value)& label('emailLabel')}/>
                    <label id="emailLabel" className="label">E-mail</label>
                </div>
                <div className="user-box">
                    <input id="password" type="password" name="" required=""
                           onChange={ev => setPassword(ev.target.value)& label('passwordLabel')}/>
                    <label id="passwordLabel" className="label">Parola</label>
                </div>
                <button type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    GİRİŞ Yap
                </button>
                <Link to="/Signup">Hesabınız yok mu?</Link>
            </form>
        </div>
    )
}

