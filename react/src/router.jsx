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
import AdminLayout from "./components/AdminLayout.jsx";
import LessonLayout from "./components/lessonLayout.jsx"
import AllLessons from "./views/allLessons.jsx";
import AllTeachers from "./views/allTeachers.jsx";
import Lesson from "./views/lesson.jsx";
import MyLessons from "./views/MyLessons.jsx";


const router = createBrowserRouter([
  {
    path: '/home',
    element: <MainPage/>,
  },
  {
    path: "/lessons",
    element: <AllLessons/>
  },
  {
    path: "/teachers",
    element: <AllTeachers/>
  },
  {
    path: "/lesson/*",
    element: <Lesson/>
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
    path: '*',
    element: <NotFound/>
  },
  {
    element: <GuestLayout/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      },
    ]
  },
  {
    element: <DefaultLayout/>,
    children: [
      {
        path: "/admin",
        element: <AdminLayout/>,
        children: [
          {
            path: '/admin',
            element: <MainPage/>
          },
          {
            path: 'users',
            element: <Users/>
          },
        ]
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
        path: 'MyLessons',
        element: <MyLessons/>
      },
      {
        path: '/lesson/content/*',
        element: <LessonLayout/>,
      },
    ]
  },
])

export default router;
