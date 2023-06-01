import {useStateContext} from "../context/ContextProvider.jsx";
import Guest from "../components/Guest.jsx";
import Default from "../components/Default.jsx";
import Teacher from "../components/Teacher.jsx";
import Admin from "../components/Admin.jsx";

export default function MainPage() {
  const {token, role, setToken} = useStateContext()
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
