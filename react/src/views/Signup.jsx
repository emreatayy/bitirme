import {Link} from "react-router-dom";

export default function Signup(){
    const onSubmit = (ev) => {
        ev.preventDefault();
    }

    return(
        <div className="login-box">
            <h2>Signup</h2>
            <form>
                <div className="user-box">
                    <input type="text" name="" required="" />
                    <label className="label">Full Name</label>
                </div>
                <div className="user-box">
                    <input type="text" name="" required="" />
                    <label className="label">Email Adress</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required="" />
                    <label className="label">Password</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required="" />
                    <label className="label">Password Confirm</label>
                </div>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
                <Link to="/Login">Already have an account?</Link>
            </form>
        </div>
    )
}
