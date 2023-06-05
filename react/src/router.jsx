import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login.jsx";
import Index from "./views/index.jsx";
import Signup from "./views/Signup.jsx";
import NotFound from "./views/NotFound.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Lessons from "./views/Lessons.jsx";
import Forum from "./views/forum.jsx";
import Messages from "./views/Messages.jsx";
import Calendar from "./views/Calendar.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import Users from "./views/Users.jsx";
import MainPage from "./views/MainPage.jsx";
import Sss from "./views/sss.jsx";
import AboutUs from "./views/aboutUs.jsx"
import LessonLayout from "./components/lessonLayout.jsx"
import AllLessons from "./views/allLessons.jsx";
import LessonInfoLayout from "./components/LessonInfoLayout.jsx";
import EditLesson from "./views/EditLesson.jsx";
import AddLesson from "./views/AddLesson.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout/>,
    children: [
      {
        path: "/",
        element: <Index/>
      },
      {
        path: "/index",
        element: <Index/>
      },
      {
        path: "/sss",
        element: <Sss/>
      },
      {
        path: "/aboutus",
        element: <AboutUs/>
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
        path: "/allLessons",
        element: <AllLessons/>
      },
      {
        path: '/lessonsInfo/*',
        element: <LessonInfoLayout/>,
      },
    ]
  },
  {
    path: "/",
    element: <DefaultLayout/>,
    children: [
      {
        path: '/main',
        element: <MainPage/>
      },
      {
        path: '/lessons',
        element: <Lessons/>,
      },
      {
        path: '/lessons/*',
        element: <LessonLayout/>,
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
        path: "/all",
        element: <AllLessons/>
      },
      {
        path: '/lessonzInfo/*',
        element: <LessonInfoLayout/>,
      },
      {
        path: "editlesson",
        element: <EditLesson/>,
      },
      {
        path: "addlesson",
        element: <AddLesson/>
      }
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  },
])

export default router;
