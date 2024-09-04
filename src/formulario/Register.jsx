import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styleRegister.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="container__input">
      <p className="title">REGISTRATE</p>

      <label className="label" htmlFor="username">
        Username
      </label>

      <input
        id="username"
        type="text"
        className="for_input username"
        onChange={(e) => {
          obtenerUsuario(e);
        }}
        placeholder="ingrese un nombre de usuario"
      />

      <label className="label" htmlFor="email">
        Email
      </label>

      <input
        id="email"
        type="email"
        className="for_input email"
        onChange={(e) => {}}
        placeholder="correo electronico"
      />

      <label className="label" htmlFor="password">
        Contraseña
      </label>

      <input
        id="password"
        type="password"
        className="for_input password"
        onChange={(e) => {}}
        placeholder="contraseña"
      />

      <div className="info-text">
         ya tienes una cuenta ? inicia <NavLink className="here" to={'/'}>aqui</NavLink>
      </div>

      <div className="button-register" onClick={(e) => {}}>
        Registrar
      </div>
    </div>
  );
}
