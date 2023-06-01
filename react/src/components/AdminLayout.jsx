import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider.jsx";
import axiosClient from "../axios.js";
import React, {useEffect, useState} from "react";
import "../styles/defaultLayout.css";

export default function AdminLayout() {
  const { role,  setUser, setToken} = useStateContext();

    if(role != 2){
      return <Navigate to="/*"/>
    }
  return(
        <Outlet/>
  );
}
