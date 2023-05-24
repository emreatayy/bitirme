import {Link} from "react-router-dom";
import {useState} from "react";
import axiosClient from "../axios.js";
import {useStateContext} from "../context/ContextProvider.jsx";


export default function Login() {
  const {setUser, setToken, setRole} = useStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({__html: ""});

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({__html: ""});

    axiosClient
      .post("/login", {
        email,
        password,
      })
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token)
          setRole(data.user.role)
      })
      .catch((error) => {
        if (error.response.data.errors) {
          const finalErrors = Object.values(error.response.data.errors);
          setError({__html: finalErrors.join("<br>")});
        } else if (error.response.data.error) {
          const finalErrors = error.response.data.error;
          setError({__html: finalErrors});
        }
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Hesabınıza Giriş Yapın
          </h2>
        </div>
        {error.__html && (<p dangerouslySetInnerHTML={error}></p>)}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <input id="email" type="text" name="" required=""
                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     onChange={ev => setEmail(ev.target.value)}
              />
              <label id="emailLabel" className="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
            </div>
            <div>
              <input id="password" type="password" name="" required=""
                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     onChange={ev => setPassword(ev.target.value)}/>
              <label id="passwordLabel" className="block text-sm font-medium leading-6 text-gray-900">Parola</label>
            </div>
            <button type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              GİRİŞ Yap
            </button>
            <br/>
            <Link to="/Signup">Hesabınız yok mu?</Link>
          </form>
        </div>
      </div>
    </>
  )
}

