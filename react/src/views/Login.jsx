import {Link} from "react-router-dom";

export default function Login(){

    const onSubmit =(ev) =>{
        ev.preventDefault();
    }

    return(
        <div className="login-box">
            <h2>Login</h2>
            <form>
                <div className="user-box">
                    <input type="text" name="" required="" />
                    <label className="label">Username</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required="" />
                    <label className="label">Password</label>
                </div>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
                <Link to="/Signup">Do not have an account?</Link>
            </form>
        </div>
    )
}

