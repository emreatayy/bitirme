import React, {useEffect, useState} from "react";
import "../styles/lessons.css"
import {useStateContext} from "../context/ContextProvider.jsx";
import axiosClient from "../axios.js";
import {Link, Navigate} from "react-router-dom";
import Guest from "../components/Guest.jsx";
import Default from "../components/Default.jsx";
import Teacher from "../components/Teacher.jsx";

export default function allTeachers() {
  const { role, token} = useStateContext()
  const [kontrol, setKontrol] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const uri = window.location.search;

  useEffect(() => {
    axiosClient.get(`/teachers${uri}`)
      .then(({data}) => {
        setTeachers(data)
        setKontrol(true)
      })
  }, [])
  const [open, setOpen] = useState(true)

  if (!token) {
    return (
        <Guest>
          <div className="lessonsContainer">
            <div className="bg-white w-full">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                {kontrol ? (
                  teachers[0] != null ? (
                    <div
                      className="grid grid-cols-8 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-12">
                      {teachers.map((teacher) => (
                        <div className="group">
                          <div
                            className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img
                              src={teacher.username}
                              className="h-full w-full object-cover object-center group-hover:opacity-75"
                              alt="zaa"/>
                          </div>
                            <h3 className="mt-4 text-sm text-gray-700">{teacher.name+" "+teacher.surname}</h3>
                        </div>
                      ))}
                    </div>):(
                    <h2 className="text-center">Aradığınız eğitimen bulunamadı.</h2>
                  )
                ): (
                  <div className="loader"></div>)
                }
              </div>
            </div>
          </div>
        </Guest>
    )
  }
if(role == 0){
    return (
      <>
        <Default>
          <div className="lessonsContainer">
            <div className="bg-white w-full">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                {kontrol ? (
                  teachers[0] != null ? (
                    <div
                      className="grid grid-cols-8 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-12">
                      {teachers.map((teacher) => (
                        <div className="group">
                          <div
                            className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img
                              src={teacher.username}
                              className="h-full w-full object-cover object-center group-hover:opacity-75"
                              alt="zaa"/>
                          </div>
                          <h3 className="text-center mt-4 text-sm text-gray-700">{teacher.name+" "+teacher.surname}</h3>
                          <Link to={"/lessons?teacher="+teacher.username}>
                            <h3 className="mt-4 text-sm text-gray-700">Eğitmenin dersleri</h3>
                          </Link>
                        </div>
                      ))}
                    </div>):(
                    <h2 className="text-center">Aradığınız eğitimen bulunamadı.</h2>
                  )
                ): (
                  <div className="loader"></div>)
                }
              </div>
            </div>
          </div>
        </Default>
      </>
    )
  }
  else {
    return <Navigate to="/home"/>
}
}
