import React from 'react'
import ReactDOM from 'react-dom/client'
import {ContextProvider} from "./context/ContextProvider.jsx";
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import "./style/style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>
  </React.StrictMode>,
)
