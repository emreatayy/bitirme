import {Link} from "react-router-dom";
import {createRef, useState} from "react";
import {useStateContext} from "../context/ContextProvider.jsx";
import axiosClient from "../axios.js";
export default function Signup() {
  const firstNameRef = createRef()
  const lastNameRef = createRef()
  const emailRef = createRef()
  const passwordRef = createRef()
  const passwordConfirmationRef = createRef()
  const {setUser, setToken} = useStateContext()
  const [errors, setErrors] = useState(null)
  const onSubmit1 = ev => {
    ev.preventDefault()

    const payload = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    console.log(payload)
    axiosClient.post('/signup', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch(err => {
        console.log(err)
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
          console.log(response.data.errors)
        }
      })
  }
  const down = event => {
    const label = document.getElementById("label" + event.target.id);
    console.log(event.target.id)
    if (event.target.value.length > 0) {
      label.style.top = "32px";
      label.style.left = "0";
      label.style.color = "#03e9f4";
      label.style.fontSize = "12px";
      label.style.color = "#329E32";
    }
  };
  return (
    <div className="login-box">
      <h2>Signup</h2>
      <form onSubmit={onSubmit1}>
        <div className="user-box">
          <input ref={firstNameRef} type="text" name="" required="" onChange={down} id="1"/>
          <label className="label" id="label1">First Name</label>
        </div>
        <div className="user-box">
          <input ref={lastNameRef} type="text" name="" required="" onChange={down} id="2"/>
          <label className="label" id="label2">Last Name</label>
        </div>
        <div className="user-box">
          <input ref={emailRef} type="text" name="" required="" onChange={down} id="3"/>
          <label className="label" id="label3">Email Address</label>
        </div>
        <div className="user-box">
          <input ref={passwordRef} type="password" name="" required="" onChange={down} id="4"/>
          <label className="label" id="label4">Password</label>
        </div>
        <div className="user-box">
          <input ref={passwordConfirmationRef} type="password" name="" required="" onChange={down} id="5"/>
          <label className="label" id="label5">Password Confirm</label>
        </div>
        <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
        </button>
        <button>
          <Link to="/Login">Already have an account?</Link>
        </button>
      </form>
    </div>
  )
}
