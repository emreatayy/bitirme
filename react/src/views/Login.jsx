import {Link} from "react-router-dom";

export default function Login(){

  const onSubmit =(ev) =>{
    ev.preventDefault();
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

  return(
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className="user-box">
          <input type="text" name="" required=""  onChange={down} id="1"/>
          <label className="label" id="label1">Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required=""  onChange={down} id="2"/>
          <label className="label" id="label2">Password</label>
        </div>
        <button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </button>
        <button>
          <Link to="/Signup">Do not have an account?</Link>
        </button>
      </form>
    </div>
  )
}

