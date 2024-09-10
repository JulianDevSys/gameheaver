import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styleRegister.css";
import swal from "sweetalert2"
export default function Login() {
  
  const [message, setMessage] = useState("")
  const CatchDatas=(e)=>{
    const {name,value}=e.target
    SetgetDatasLogin({
      ...getDataLogin,
      [name]:value
    })
  }
  
  const [getDataLogin,SetgetDatasLogin]=useState({
    correo :"",
    password:"",
  })

const handlerLogin = async(e)=>{
  e.preventDefault()
  

  const url= 'http://localhost:4000'
  const response=await fetch(url,{
    method:"POST",
    headers:{
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(getDataLogin), 
  })
  if(response.status==200){
    swal.fire({
      title: "Good job!",
      text: "yo have been signed up correctly",
      icon: "success"
    });
   }
   else{
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!, dont repeat Email",
    
    })
  }
  }


  return (
    <div className="container__input">
        <p className="title">INICIAR</p>

      <label className="label" htmlFor="username">
        Username
      </label>

      <input
        id="username"
        type="email"
        className="for_input username"
        name="correo"
        value={getDataLogin.correo}
        onChange={CatchDatas}
        placeholder="ingrese un nombre de usuario"
      />


      <label className="label" htmlFor="password">
        Contraseña
      </label>

      <input
        id="password"
        type="password"
        name="password"
        value={getDataLogin.password}
        className="for_input password"
        onChange={CatchDatas}
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
