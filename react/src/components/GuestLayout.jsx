import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider.jsx";
import {useState} from "react";
import "../styles/defaultLayout.css"

export default function GuestLayout() {
  const {token} = useStateContext()
  if (token) {
    return <Navigate to="/"/>
  }
  const [open, setOpen] = useState(true);

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
                Hoşgeldiniz
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

              <li
                className={`flex  rounded-md cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}>
                <Link to="/educations" className="flex flex-row emrebaba p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
                  </svg>

                  <span className={`${!open && "hidden"} origin-left duration-200 ml-3`}>Eğitimler
              </span>
                </Link>
              </li>
              <li
                className={`flex  rounded-md cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}>
                <Link to="/aboutus" className="flex flex-row emrebaba p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"/>
                  </svg>
                  <span className={`${!open && "hidden"} origin-left duration-200 ml-3`}>Hakkımızda
              </span>
                </Link>
              </li>
              <li
                className={`flex rounded-md cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}>
                <Link to="/sss" className="flex flex-row emrebaba p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                  </svg>

                  <span className={`${!open && "hidden"} origin-left duration-200 ml-3`}>Sıkça Sorulan Sorular
              </span>
                </Link>
              </li>
              <li
                className={`flex rounded-md cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}>
                <Link to="/login" className="flex flex-row emrebaba p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/>
                  </svg>

                  <span className={`${!open && "hidden"} origin-left duration-200 ml-3`}>Giriş Yap
              </span>
                </Link>
              </li>
              <li
                className={`flex rounded-md cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}>
                <Link to="/signup" className="flex flex-row emrebaba p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"/>
                  </svg>
                  <span className={`${!open && "hidden"} origin-left duration-200 ml-3`}>Kayıt Ol
              </span>
                </Link>
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
