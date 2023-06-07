import React, {useEffect, useState} from "react";
import "../styles/users.css"
import axiosClient from "../axios.js";
import Admin from "../components/Admin.jsx";
import Stack from "@mui/material/Stack";
import {Alert} from "@mui/material";
import {useTime, useTimer} from "react-timer-hook";

export default function Users() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState();
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);
  const [users, setUsers] = useState([]);
  const time = new Date();

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axiosClient.get(
      "/users");
    setUsers(result.data);
  }

  async function editUser(users) {
    setId(users.id);
    setEmail(users.email);
    setName(users.name);
    setSurname(users.surname);
    setUsername(users.username);
    setRole(users.role);
  }

  //update
  async function update(event) {
    event.preventDefault();

      axiosClient.patch("/user",
        {
          id: id,
          name: name,
          surname: surname,
          username: username,
          role: role,
        }).then(({data}) => {
        setMessage(data)
        setStatus("success")
        axiosClient.get(
          "/users")
          .then(({data}) => {
            setUsers(data);
          })
      })
        .catch(() => {
          setMessage("Kullanıcı Güncellenemedi.")
          setStatus("error")
        });
  }
  async function del(event){
    event.preventDefault();

    axiosClient.delete("/user",
      {
        data: {
          username: username
        }
      });
  }


  return (
      <Admin>
        {message != null ? (
          <Stack sx={{width: '290px', position: 'absolute', top: '650px', left: '1200px'}} spacing={2}>
            <Alert severity={status} onClose={() => {setMessage(null)}}>{message}</Alert>
          </Stack>
        ) : (
          <>
          </>
          )
        }
      <div className="userContainer">
        <form className="userForm">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="first_name"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue">Ad</label>
              <input type="text" id="first_name"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Ad" required
                     value={name}
                     onChange={(event) => {
                       setName(event.target.value);
                     }}/>
            </div>

            <div>
              <label htmlFor="last_name"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue">Soyad</label>
              <input type="text" id="last_name"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Soyad" required
                     value={surname}
                     onChange={(event) => {
                       setSurname(event.target.value);
                     }}/>
            </div>
            <div>
              <label htmlFor="last_name"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue">Email</label>
              <input type="email" id="last_name"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="E-mail" required
                     value={email}
                     onChange={(event) => {
                       setEmail(event.target.value);
                     }}/>
            </div>
            <div>
              <label htmlFor="last_name" className="block mb-2 text-sm font-medium
              text-gray-900 dark:text-blue">Kullanıcı
                Adı</label>
              <input type="text" id="last_name"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Kullanıcı Adı" required
                     value={username}
                     onChange={(event) => {
                       setUsername(event.target.value);
                     }}/>
            </div>
            <div>
              <label htmlFor="last_name"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue">Rolü</label>
              <input type="text" id="last_name"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Rol" required
                     value={role}
                     onChange={(event) => {
                       setRole(event.target.value);
                     }}/>
            </div>
          </div>
          <button onClick={update}
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Update
          </button>
          <button onClick={del}
                  className="ml-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Delete
          </button>
        </form>
        <div className="userList">
          <table className="userTable">
            <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Email</th>
              <th scope="col">Ad</th>
              <th scope="col">Soyad</th>
              <th scope="col">Kullanıcı Adı</th>
              <th scope="col">Rol</th>
              <th scope="col">Option</th>
            </tr>
            </thead>
            {users.map(function fn(user) {
              return (
                <tbody>
                <tr>
                  <th scope="row">{user.id} </th>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.username}</td>
                  <td>{
                    user.role == 0 ? (
                      <p>Öğrenci</p>
                    ) : (
                      user.role == 1 ? (
                        <p>Öğretmen</p>
                      ) : (
                        <p>Admin</p>
                      )
                    )
                  }</td>

                  <td>
                    <button onClick={() => editUser(user)}
                            className="bg-transparent hover:bg-blue-500 text-blue-700
                            font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Edit
                    </button>
                  </td>
                </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
      </Admin>
  );
}
