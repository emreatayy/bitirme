import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider.jsx";
import axiosClient from "../axios.js";
import {useEffect} from "react";
import "../styles/defaultLayout.css";


export default function StudentLayout() {
  const {user, token, lessons, setUser, setToken, setLessons} = useStateContext()
  useEffect(() => {
    axiosClient.get('/me')
      .then(({data}) => {
        setUser(data)
      })
  }, [])

  if (!token) {
    return <Navigate to="/index"/>
  }

  let navBtns = [];
  let header;

  //Öğrenci
  if (user.role === 0) {
    header = "Öğrenci";
    navBtns = [
      {
        name: "Derslerim",
        url: "/lessons"
      },
      {
        name: "Mesajlar",
        url: "/messages"
      },
      {
        name: "Forum",
        url: "/forum"
      },
      {
        name: "Takvim",
        url: "/calendar"
      },
      {
        name: "Eğitimler",
        url: "/educations"
      },
    ]
  }

  //Öğretmen
  if (user.role === 1) {
    header = "Öğretmen";
    navBtns = [
      {
        name: "Derslerim",
        url: "/lessons"
      },
      {
        name: "Mesajlar",
        url: "/messages"
      },
      {
        name: "Forum",
        url: "/forum"
      },
      {
        name: "Takvim",
        url: "/calendar"
      },
      {
        name: "Eğitimler",
        url: "/educations"
      },
    ]
  }

  //Admin
  if (user.role === 2) {
    header = "Admin";
    navBtns = [
      {
        name: "Kullanıcılar",
        url: "/users"
      },
      {
        name: "Mesajlar",
        url: "/messages"
      },
      {
        name: "Forum",
        url: "/forum"
      },
      {
        name: "Takvim",
        url: "/calendar"
      },
      {
        name: "Eğitimler",
        url: "/educations"
      },
    ]
  }
  const onLogout = (ev) => {
    ev.preventDefault();
    axiosClient.post("/logout").then((res) => {
      setUser({});
      setToken(null);
    });
  };


  const onClick1 = (ev) => {
    const btn = document.getElementsByClassName("1");
    const outletBtn = document.getElementById("outlet");
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.backgroundColor = "#7fdcff";
      btn[i].style.color = "black";
    }
    outletBtn.style.backgroundColor = "#7fdcff";
    outletBtn.style.color = "black";
    ev.target.style.backgroundColor = "#6193e8";
    ev.target.style.color = "white";
  }
  const onClick2 = (ev) => {
    const btn = document.getElementsByClassName("1");
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.backgroundColor = "#7fdcff";
      btn[i].style.color = "black";
    }
    ev.target.style.backgroundColor = "#6193e8";
    ev.target.style.color = "white";
  }

  return (
    <>
      <div id="studentLayout">
        <div className="sideBar">
          <div>
            <p>{header}</p>
            <p>{user.role}</p>
          </div>
          <div>
            {navBtns.map(({name, url}) => <Link to={url} onClick={onClick1} className="1">{name}</Link>)}
          </div>
          <div>
            <a href="#" onClick={onLogout} className="btn-logout">Çıkış Yap</a>
          </div>
        </div>

        <div className="content">
          <div className="navBar">
            <div>
              <Link to="/" onClick={onClick2} id="outlet">Anasayfa</Link>
              <Link to="/">Menü1</Link>
            </div>
            <hr/>
            <div>
              Arama
            </div>
          </div>
          <div className="outlet">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}


