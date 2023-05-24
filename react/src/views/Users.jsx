import axios from 'axios';
import React, {useEffect, useState} from "react";

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
    <div>
      <h1>Employee Details</h1>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <input type="text" className="form-control" id="id" hidden
                   value={id}
                   onChange={(event) => {
                     setId(event.target.value);
                   }}
            />
            <div>
              <label>Kullanıcı Email</label>
              <input type="text" className="form-control" id="email"
                     value={email}
                     onChange={(event) => {
                       setEmail(event.target.value);
                     }}
              />
            </div>
            <div>
              <label>Kullanıcı Adı</label>
              <input type="text" className="form-control" id="name"
                     value={name}
                     onChange={(event) => {
                       setName(event.target.value);
                     }}
              />
            </div>

          </div>
          <div className="form-group">
            <label>Kullanıcı Soy Adı</label>
            <input type="text" className="form-control" id="surname"
                   value={surname}
                   onChange={(event) => {
                     setSurname(event.target.value);
                   }}
            />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" id="username"
                   value={username}
                   onChange={(event) => {
                     setUsername(event.target.value);
                   }}
            />
          </div>
          <div className="form-group">
            <label>Şifre</label>
            <input type="text" className="form-control" id="password"
                   value={password}
                   onChange={(event) => {
                     setPassword(event.target.value);
                   }}
            />
          </div>
          <div className="form-group">
            <label>Rol</label>
            <input type="text" className="form-control" id="role"
                   value={role}
                   onChange={(event) => {
                     setRole(event.target.value);
                   }}
            />
          </div>

          <div>
            <button className="btn btn-primary mt-4" onClick={save}>Register</button>
            <button className="btn btn-warning mt-4" onClick={update}>Update</button>
          </div>
        </form>
      </div>

      <table className="table table-dark" align="center">
        <thead>
        <tr>
          <th scope="col">Kullanıcı Id---</th>
          <th scope="col">Kullanıcı Email---</th>
          <th scope="col">Kullanıcı Adı---</th>
          <th scope="col">Kullanıcı Soyadı---</th>
          <th scope="col">Kullanıcı Username---</th>
          <th scope="col">Kullanıcı Şifre---</th>
          <th scope="col">Kullanıcı Rol---</th>

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
              <td>{user.password}</td>
              <td>{user.role}</td>

              <td>
                <button type="button" className="btn btn-warning" onClick={() => editEmployee(user)}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={() => DeleteEmployee(user.id)}>Delete
                </button>
              </td>
            </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Users;
