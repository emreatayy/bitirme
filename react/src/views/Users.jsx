import axios from 'axios';
import React, {useEffect, useState} from "react";
import "../../src/styles/mainPage.css"

function Users() {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get(
      "http://127.0.0.1:8000/api/users");
    setUsers(result.data);
    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/save",
        {
          email: email,
          name: name,
          surname: surname,
          username: username,
          password: password,
          role: role,
        });
      alert("User Registation Successfully");
      setEmail("");
      setName("");
      setSurname("");
      setUsername("");
      setPassword("");
      setRole("");
      Load();

    } catch (err) {
      alert("User Registation Failedy");
    }
  }

  async function editEmployee(users) {
    setId(users.id);
    setEmail(users.email);
    setName(users.name);
    setSurname(users.surname);
    setUsername(users.username);
    setPassword(users.password);
    setRole(users.role);
  }


  //Silme
  async function DeleteEmployee(id) {
    await axios.delete("http://127.0.0.1:8000/api/delete/" + id);
    alert("Employee deleted Successfully");
    await Load();
  }

  //update
  async function update(event) {
    event.preventDefault();

    try {

      await axios.put("http://127.0.0.1:8000/api/update/" + users.find(u => u.id === id).id || id,
        {
          id: id,
          email: email,
          name: name,
          surname: surname,
          username: username,
          password: password,
          role: role,

        });
      alert("Registation Updateddddd");
      setId("");
      setEmail("");
      setName("");
      setSurname("");
      setUsername("");
      setPassword("");
      setRole("");
      await Load();

    } catch (err) {
      alert("User Registation Failedx");
    }
  }

  return (
    <>
      <form className="userForm">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>

            <label htmlFor="first_name"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ad</label>
            <input type="text" id="first_name"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="John" required
                   value={name}
                   onChange={(event) => {
                     setName(event.target.value);
                   }}/>
          </div>

          <div>
            <label htmlFor="last_name"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Soyad</label>
            <input type="text" id="last_name"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Doe" required
                   value={surname}
                   onChange={(event) => {
                     setSurname(event.target.value);
                   }}/>
          </div>
          <div>
            <label htmlFor="last_name"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="last_name"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Doe" required
                   value={email}
                   onChange={(event) => {
                     setEmail(event.target.value);
                   }}/>
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kullanıcı
              Adı</label>
            <input type="text" id="last_name"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Doe" required
                   value={username}
                   onChange={(event) => {
                     setUsername(event.target.value);
                   }}/>
          </div>
          <div>
            <label htmlFor="last_name"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rolü</label>
            <input type="text" id="last_name"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Doe" required
                   value={role}
                   onChange={(event) => {
                     setRole(event.target.value);
                   }}/>
          </div>
        </div>
        <button onClick={save}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Register
        </button>
        <button onClick={update}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Update
        </button>
      </form>

      <div className="userList">
        <table className="" align="center">
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
                <td>{user.role}</td>

                <td>
                  <button onClick={() => editEmployee(user)}
                          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Edit
                  </button>
                  <button onClick={() => DeleteEmployee(user.id)}
                          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Delete
                  </button>
                </td>
              </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Users;


/*
*
* */
