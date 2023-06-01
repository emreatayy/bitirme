import {createContext, useContext, useState} from "react";

const StateContext = createContext(
  {
    user: null,
    categories: null,
    role: null,
    token: null,
    lessons: null,
    userClasses: null,
    lectureClasses: null,
    lectureVideos: null,
    videos: null,
    setUser: () => {
    },
    setToken: () => {
    },
    setRole: () => {
    },
    setLessons: () => [],
    setCategories: () => [],
    setUserClasses: () => [],
    setLectureClasses: () => [],
    setLectureVideos: () => [],
    setVideos: () =>[],
  }
)

export const ContextProvider = ({children}) => {
  const [lessons, setLessons] = useState([]);
  const [user, setUser] = useState({});
  const [categories, setCategories] = useState([]);
  const [userClasses, setUserClasses] = useState([]);
  const [lectureClasses, setLectureClasses] = useState([]);
  const [lectureVideos, setLectureVideos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [token, _setToken] = useState(localStorage.getItem('TOKEN') || '');
  const [role, _setRole] = useState(localStorage.getItem('ROLE') || Number);

  const setToken = (token) => {
    _setToken(token)
    if (token) {
      localStorage.setItem('TOKEN', token);
    } else {
      localStorage.removeItem('TOKEN')
    }
  }
  const setRole = (role) => {
    _setRole(role)
    if (role) {
      localStorage.setItem('ROLE', role);
    } else {
      localStorage.removeItem('ROLE')
    }
  }

  return (
    <StateContext.Provider value={{
      user,
      categories,
      token,
      lessons,
      role,
      userClasses,
      lectureClasses,
      lectureVideos,
      videos,
      setUser,
      setToken,
      setRole,
      setLessons,
      setCategories,
      setUserClasses,
      setLectureClasses,
      setLectureVideos,
      setVideos,
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
