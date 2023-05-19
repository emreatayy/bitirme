import {Link} from "react-router-dom";
import {useState} from "react";
import axiosClient from '../axios.js'
import {useStateContext} from "../context/ContextProvider.jsx";


export default function Signup() {
  const {setUser, setToken} = useStateContext();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [nameErrors, setNameError] = useState({__html: ""});
  const [surnameErrors, setSurnameError] = useState({__html: ""});
  const [usernameErrors, setUsernameError] = useState({__html: ""});
  const [emailErrors, setEmailError] = useState({__html: ""});
  const [passwordErrors, setPasswordError] = useState({__html: ""});

  function label(id) {
    const element = document.getElementById(id);
    if (element) {
      element.style = "    top: -20px;" +
        "    left: 0;\n" +
        "    color: #078807;\n" +
        "    font-size: 12px;";
    }
  }

  const onSubmit = (ev) => {
    ev.preventDefault();
    setNameError({__html: ""});
    setSurnameError({__html: ""});
    setUsernameError({__html: ""});
    setPasswordError({__html: ""});
    setEmailError({__html: ""});


    axiosClient
      .post("/signup", {
        email,
        name,
        surname,
        username,
        password,
        password_confirmation: passwordConfirmation,
      })
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token)
      })
      .catch((error) => {
        if (error.response.data.errors.email) {
          const emailErrors = error.response.data.errors.email.join('<br>')
          setEmailError({__html: emailErrors});
        }
        if (error.response.data.errors.name) {
          const nameErrors = error.response.data.errors.name.join('<br>')
          setNameError({__html: nameErrors});
        }
        if (error.response.data.errors.surname) {
          const surnameErrors = error.response.data.errors.surname.join('<br>')
          setSurnameError({__html: surnameErrors});
        }
        if (error.response.data.errors.username) {
          const usernameErrors = error.response.data.errors.username.join('<br>')
          setUsernameError({__html: usernameErrors});
        }
        if (error.response.data.errors.password) {
          const passwordErrors = error.response.data.errors.password.join('<br>')
          setPasswordError({__html: passwordErrors});
        }

      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            KAyıt Olun
          </h2>
        </div>

        <form onSubmit={onSubmit} method="post" className="space-y-6">
          {nameErrors && (<p dangerouslySetInnerHTML={nameErrors}></p>)}
          <div>
            <input id="name" type="text" name="" required=""
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   onChange={ev => setName(ev.target.value) & label('nameLabel')}/>
            <label id="nameLabel" className="block text-sm font-medium leading-6 text-gray-900">İsim</label>
          </div>
          {surnameErrors && (<p dangerouslySetInnerHTML={surnameErrors}></p>)}
          <div>
            <input id="surname" type="text" name="" required=""
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   onChange={ev => setSurname(ev.target.value) & label('surnameLabel')}/>
            <label id="surnameLabel" className="block text-sm font-medium leading-6 text-gray-900">Soyisim</label>
          </div>
          {usernameErrors && (<p dangerouslySetInnerHTML={usernameErrors}></p>)}
          <div>
            <input id="username" type="text" name="" required=""
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   onChange={ev => setUsername(ev.target.value) & label('usernameLabel')}/>
            <label id="usernameLabel" className="block text-sm font-medium leading-6 text-gray-900">Kullanıcı
              Adı</label>
          </div>
          {emailErrors && (<p dangerouslySetInnerHTML={emailErrors}></p>)}
          <div>
            <input id="email" type="email" name="" required=""
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   onChange={ev => setEmail(ev.target.value) & label('emailLabel')}/>
            <label id="emailLabel" className="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
          </div>
          {passwordErrors && (<p dangerouslySetInnerHTML={passwordErrors}></p>)}
          <div>
            <input id="password" type="password" name="" required=""
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   onChange={ev => setPassword(ev.target.value) & label('passwordLabel')}/>
            <label id="passwordLabel" className="block text-sm font-medium leading-6 text-gray-900">Parola</label>
          </div>
          <p></p>
          <div>
            <input type="password" name="" required=""
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   onChange={ev => setPasswordConfirmation(ev.target.value) & label('passConLabel')}/>
            <label id="passConLabel" className="block text-sm font-medium leading-6 text-gray-900">Parola Tekrar</label>
          </div>
          <button type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            GİRİŞ Yap
          </button>
          <br/>
          <Link to="/Login">Hesabınız var mı?</Link>
        </form>
      </div>
    </>
  );
}

