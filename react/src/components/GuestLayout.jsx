import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../context/ContextProvider.jsx";
import {useState} from "react";
import "../styles/defaultLayout.css"

export default function GuestLayout() {
  const {token} = useStateContext()
if(token){
  return <Navigate to="/home" />
}
  const [open, setOpen] = useState(true);

  return (
          <Outlet/>
  )
}
