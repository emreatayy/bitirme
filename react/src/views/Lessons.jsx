import {useStateContext} from "../context/ContextProvider.jsx";
import {useEffect} from "react";
import axiosClient from "../axios.js";

export default function lessons() {
  const {user, token, lessons, setUser, setToken, setLessons} = useStateContext();
  useEffect(() => {
    axiosClient.get('/me')
      .then(({data}) => {
        setUser(data)
      })
  }, []);

  
  return (
    <div>
      Dersler
    </div>
  )
}
