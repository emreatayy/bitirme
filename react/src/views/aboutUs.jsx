import React from "react";
import "../styles/aboutUs.css"
import {useStateContext} from "../context/ContextProvider.jsx";
import Guest from "../components/Guest.jsx";
import Default from "../components/Default.jsx";
import Teacher from "../components/Teacher.jsx";
import Admin from "../components/Admin.jsx";


export default function aboutUs() {
  const {token,role} = useStateContext()
if(!token){
  return(
  <Guest>
    <div className="wrapper">
      <div className="typing-demo">
        Biz kimiz ve ne yapıyoruz ?
      </div>
      <div className="wrapperText">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </div>
  </Guest>
  )
}else if(role == 0){
  return(
    <Default>
      <div className="wrapper">
        <div className="typing-demo">
          Biz kimiz ve ne yapıyoruz ?
        </div>
        <div className="wrapperText">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
    </Default>
  )
}else if(role == 1){
  return(
    <Teacher>
      <div className="wrapper">
        <div className="typing-demo">
          Biz kimiz ve ne yapıyoruz ?
        </div>
        <div className="wrapperText">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
    </Teacher>
  )
}else if(role == 2){
  return(
    <Admin>
      <div className="wrapper">
        <div className="typing-demo">
          Biz kimiz ve ne yapıyoruz ?
        </div>
        <div className="wrapperText">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
    </Admin>
  )
}

}
