import {Navigate} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider.jsx";
import React, {useEffect, useState} from "react";
import "../styles/defaultLayout.css"
import axiosClient from "../axios.js";

export default function GuestLayout(role) {
  const {user, setUser} = useStateContext()
  useEffect(() => {
    axiosClient.get('/me')
      .then(({data}) => {
        setUser(data)
      })
  }, [])
  if (user.role !==role){
    return <Navigate to="/" />
  }
}
