import {createContext, useContext, useState} from "react";

const StateContext = createContext(
    {
        user: null,
        token: null,
        role: null,
        lesson: null,
        author: null,
        lessons: null,
        categories: null,
        setAuthor: () => {},
        setLesson: () => {},
        setUser: () => {},
        setToken: () => {},
        setRole: () => {},
        setLessons: () => [],
        setCategories: () => [],
    }
)

export const ContextProvider =  ({children}) =>{
    const [author, setAuthor] = useState({});
    const [lesson, setLesson] = useState({});
    const [lessons, setLessons] = useState([]);
    const [categories, setCategories] = useState([]);
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('TOKEN') || '');
    const [role, _setRole] = useState(localStorage.getItem('ROLE') || 0);

    const setToken = (token) => {
        _setToken(token)
        if (token){
            localStorage.setItem('TOKEN', token);
        }
        else{
            localStorage.removeItem('TOKEN')
        }
    }
    const setRole = (role) =>{
        _setRole(role)
        if (role != null){
            localStorage.setItem('ROLE', role);
        }
        else{
            localStorage.removeItem('ROLE')
        }
    }

    return(
        <StateContext.Provider value={{
            user,
            token,
            role,
            lesson,
            author,
            lessons,
            categories,
            setCategories,
            setUser,
            setRole,
            setToken,
            setAuthor,
            setLesson,
            setLessons
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const  useStateContext = () => useContext(StateContext)
