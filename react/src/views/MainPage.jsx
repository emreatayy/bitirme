import {useStateContext} from "../context/ContextProvider.jsx";
import Guest from "../components/Guest.jsx";
import Default from "../components/Default.jsx";
import Teacher from "../components/Teacher.jsx";
import Admin from "../components/Admin.jsx";
import {Link} from "react-router-dom";
import React, {useState} from "react";

export default function MainPage() {
  const {token, role, setToken} = useStateContext()
  const [search, setSearch] = useState("")
  const [where, setWhere] = useState("/lessons")
  console.log(where)

  if (!token) {
    return (
      <Guest>
      Ana sayfe
      </Guest>
    )
  }
  else if(role == 0){
    return (
      <Default>
        Default {role}
        <div className="search">
          <input onChange={ev => setSearch(ev.target.value)} type="text"
                 placeholder="Search"/>
          <select onChange={event => setWhere(event.target.value)}>
            <option value="/lessons">dersler</option>
            <option value="/teachers">öğretmenler</option>
          </select>
          <Link className="btn" to= {where+"?search="+search}>Search</Link>
        </div>
      </Default>
    )
  }
  else if(role == 1){
    return (
      <Teacher>
        Teacher {role}
      </Teacher>
    )
  }
  else if(role == 2){
    return (
      <Admin>
        Admin {role}
      </Admin>
    )
  }
}
