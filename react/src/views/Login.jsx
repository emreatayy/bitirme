import {Link} from "react-router-dom";

export default function Login(){

    const onSubmit =(ev) =>{
        ev.preventDefault();
    }

    return(
        <div className="login-box">
            <h2>Login</h2>
            <form onClick={onSubmit}>
                <div className="user-box">
                    <input type="text" name="" required="" />
                    <label className="label">Username</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required="" />
                    <label className="label">Password</label>
                </div>
                <button className="button" type="submit">
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

