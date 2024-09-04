import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styleRegister.css";

export default function Login() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

const handlerLogin = ()=>{

  if(username.trim() === ''){
    return setMessage('El username no puede ser vacio')
  }

  if(username.trim().includes(' ')){
    return setMessage('El username no puede contener espacios')
  }

  if(username.trim().length > 10){
    return setMessage('El username es muy largo como mi verga')
  }







  alert('Manda datos a la base datos')
}

  return (
    <div className="container__input">
        <p className="title">INICIAR</p>

      <label className="label" htmlFor="username">
        Username
      </label>

      <input
        id="username"
        type="text"
        className="for_input username"
        onChange={(e) => {
            setUsername(e.target.value)
        }}
        placeholder="ingrese un nombre de usuario"
      />


      <label className="label" htmlFor="password">
        Contraseña
      </label>

      <input
        id="password"
        type="password"
        className="for_input password"
        onChange={(e) => {
            setPassword(e.target.value)
        }}
        placeholder="contraseña"
      />
      {message}
    <div className="info-text">
         not tienes una cuenta ? registrate <NavLink className="here" to={'/register'}>aqui</NavLink>
      </div>
      <div className="button-register" onClick={handlerLogin}>
        Iniciar
      </div>

    </div>
  );
}
