import {Link} from "react-router-dom";
import {useRef} from "react";

export default function Signup(){
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }
        console.log(payload)
    }

    const down = event => {
        const label = document.getElementById("label" + event.target.id);
        console.log(event.target.id)
        if (event.target.value.length > 0){
            label.style.top= "32px";
            label.style.left= "0";
            label.style.color= "#03e9f4";
            label.style.fontSize= "12px";
            label.style.color = "#329E32";
        }
    };

    return(
        <div className="login-box">
        <h2>Signup</h2>
        <form onSubmit={onSubmit}>
            <div className="user-box">
                <input id="1"  ref={firstNameRef} type="text" onChange={down} required=""/>
                <label id="label1">First Name</label>
            </div>
            <div className="user-box" >
                <input id="2"  ref={lastNameRef} type="text" name=""  onChange={down} required=""/>
                <label id="label2">Last Name</label>
            </div>
            <div className="user-box">
                <input id="3"  ref={emailRef} type="email" name=""  onChange={down} required="" />
                <label id="label3">E-mail</label>
            </div>
            <div className="user-box">
                <input id="4"  ref={passwordRef} type="password" name=""  onChange={down} required="" />
                <label id="label4">Password</label>
            </div>
            <div className="user-box">
                <input id="5"  ref={passwordConfirmationRef} type="password" name=""  onChange={down} required=""/>
                <label id="label5">Password Confirmation</label>

            </div>
            <a href="#">
                <button>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
                </button>
            </a>
            <Link to="/Login">Already have an account?</Link>
        </form>
    </div>
    )
}
