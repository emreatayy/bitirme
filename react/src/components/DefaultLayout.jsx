import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider.jsx";
import axiosClient from "../axios.js";
import React, {useEffect, useState} from "react";
import "../styles/defaultLayout.css";

export default function StudentLayout() {
  const {user, token, lessons, setUser, setToken, setLessons} = useStateContext()
  useEffect(() => {
    axiosClient.get('/me')
      .then(({data}) => {
        setUser(data)
      })
  }, [])
  const [open, setOpen] = useState(true);

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
        url: "/users",
        svg: <path strokeLinecap="round" strokeLinejoin="round"
                   d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
      },

      {
        name: "Mesajlar",
        url: "/messages",
        svg: <path strokeLinecap="round" strokeLinejoin="round"
                   d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"/>
      },
      {
        name: "Forum",
        url: "/forum",
        svg: <path strokeLinecap="round" strokeLinejoin="round"
                   d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/>
      },
      {
        name: "Takvim",
        url: "/calendar",
        svg: <path strokeLinecap="round" strokeLinejoin="round"
                   d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"/>
      },
    ]
  }

  const listItem = navBtns.map((list) =>
    <li
      className={`flex rounded-md 4 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}>
      <Link to={list.url} className="flex flex-row emrebaba p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="w-6 h-6">
          {list.svg}
        </svg>
        <span className={`${!open && "hidden"} origin-left duration-200 ml-3`}>{list.name}
        </span>
      </Link>
    </li>
  );
  const onLogout = (ev) => {
    ev.preventDefault();
    axiosClient.post("/logout").then((res) => {
      setUser({});
      setToken(null);
    });
  };
  return (
    <>
      <div className="flex flex-row">
        <div className="flex">
          <div
            className={` ${
              open ? "w-72" : "w-20 "
            } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
          >
            <img
              src="./src/assets/control.png"
              className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
              <img
                src="./src/assets/logo.png"
                className={`cursor-pointer duration-500 ${
                  open && "rotate-[360deg]"
                }`}
              />
              <h1
                className={`text-white origin-left font-medium text-xl duration-200 ${
                  !open && "scale-0"
                }`}
              >
                {header}
              </h1>
            </div>
            <ul className="pt-6 ">
              <li
                className={`flex rounded-md cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}>
                <Link to="/index" className="flex flex-row emrebaba p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                  </svg>

                  <span className={`${!open && "hidden"} origin-left duration-200 ml-3`}>Ana Sayfa
              </span>
                </Link>
              </li>
              {listItem}
              <li
                className={`flex rounded-md cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}>
                <a onClick={onLogout} className="flex flex-row emrebaba p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/>
                  </svg>
                  <span className={`${!open && "hidden"} origin-left duration-200 ml-3`}>Çıkış Yap
              </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="outlet">
          <Outlet/>
        </div>
      </div>
    </>
  )
}
