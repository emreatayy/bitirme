import {createContext, useContext, useState} from "react";

const StateContext = createContext(
  {
    user: null,
    token: null,
    lessons: null,
    setUser: () => {
    },
    setToken: () => {
    },
    setLessons: () => [],
  }
)

export const ContextProvider = ({children}) => {
  const [lessons, setLessons] = useState([]);
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem('TOKEN') || '');

  const setToken = (token) => {
    _setToken(token)
    if (token) {
      localStorage.setItem('TOKEN', token);
    } else {
      localStorage.removeItem('TOKEN')
    }
  }

  return (
    <StateContext.Provider value={{
      user,
      token,
      lessons,
      setUser,
      setToken,
      setLessons,
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
