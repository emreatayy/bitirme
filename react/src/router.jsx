import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login.jsx";
import Index from "./views/index.jsx";
import Signup from "./views/Signup.jsx";
import NotFound from "./views/NotFound.jsx";
import GuestLayout from "./components/layout/GuestLayout.jsx";
import Lessons from "./views/Lessons.jsx";
import Forum from "./views/forum.jsx";
import Messages from "./views/Messages.jsx";
import Calendar from "./views/Calendar.jsx";
import Education from "./views/Education.jsx";
import DefaultLayout from "./components/layout/DefaultLayout.jsx";
import Users from "./views/Users.jsx";
import MainPage from "./views/MainPage.jsx";
import Sss from "./views/sss.jsx";
import AboutUs from "./views/aboutUs.jsx"
import Lesson from "./views/lesson.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout/>,
    children: [
      {
        path: '/',
        element: <MainPage/>
      },
        {
            path: '/educations',
            element: <Education />
        },
      {
        path: '/lessons',
        element: <Lessons/>
      },
      {
        path: '/messages',
        element: <Messages/>
      },
      {
        path: '/forum',
        element: <Forum/>
      },
      {
        path: '/calendar',
        element: <Calendar/>
      },
      {
        path: '/users',
        element: <Users/>
      },
        {
            path: '/lesson/*',
            element: <Lesson />
        },
    ]
  },
  {
    path: "/",
    element: <GuestLayout/>,
    children: [
      {
        path: "/",
        element: <Index />
      },
      {
        path: "/index",
        element: <Index />
      },
      {
        path: "/sss",
        element: <Sss />
      },
      {
        path: "/aboutus",
        element: <AboutUs />
      },
        {
            path: '/lessons',
            element: <Lessons/>
        },
      {
        path: "/index",
        element: <Index />
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/educations',
        element: <Education/>
      },
        {
            path: '/lesson/*',
            element: <Lesson />
        },
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  },
])


export default router;
