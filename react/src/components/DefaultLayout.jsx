import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider.jsx";
import axiosClient from "../axios.js";
import React, {useEffect, useState} from "react";
import "../styles/defaultLayout.css";
import Admin from "./Admin.jsx";
import Teacher from "./Teacher.jsx";

export default function StudentLayout() {
  const {token} = useStateContext()

  if (!token) {
    return <Navigate to="/login"/>
  }
  return (
   <Outlet/>
  )
}
