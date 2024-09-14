import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./styleRegister.css";
import Swal from "sweetalert2"
export default function Register() {
  
  const [message, setMessage] = useState("");
  

  const [getDatas,SetgetDatas]=useState({
    correo :"",
    password:"",
    username:""

  })


  function GetDatasRegister(event){
    const {name,value}= event.target
    SetgetDatas({
      ...getDatas,
      [name]:value
    })
  }

  // validaciones agregadas
    const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
  };

    
      async function RegisterDatas(e){
        e.preventDefault()

        if(!getDatas.correo.includes("@") ){
         return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!, dont have @",
        
        })
        }
        
        if (!validatePassword(getDatas.password)) {
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial."
          });
        }
        
        const url='http://localhost:4000/register'
         const response= await fetch(url,{
          method:"POST",
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(getDatas), 
        })
        
        response.status==200?console.log("correct"):console.log("dont repeat email")
        if(response.status==200){
          Swal.fire({
            title: "Good job!",
            text: "yo have been signed up correctly",
            icon: "success"
          });
         }
         else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!, dont repeat Email/username",
          
          })
        }
      }
        
       
         
       
      



  return (
    <div className="container__input">
      <p className="title">REGISTRATE</p>

      <label className="label" htmlFor="username">
        Username
      </label>

      <input
        id="username"
        type="text"
        name="username"
        value={getDatas.username}
        className="for_input username"
        onChange={GetDatasRegister
        }
        placeholder="ingrese un nombre de usuario"
      />

      <label className="label" htmlFor="email">
        Email
      </label>

      <input
        id="email"
        type="email"
        name="correo"
        value={getDatas.correo}
        className="for_input email"
        onChange={ GetDatasRegister}
        placeholder="correo electronico"
      />

      <label className="label" htmlFor="password">
        Contraseña
      </label>

      <input
        id="password"
        type="password"
        name="password"
        value={getDatas.password}
        className="for_input password"
        onChange={GetDatasRegister}
        placeholder="contraseña"
      />

      <div className="info-text">
         ya tienes una cuenta ? inicia <NavLink className="here" to={'/'}>aqui</NavLink>
      </div>

      <div className="button-register" onClick={RegisterDatas}>
        Registrar
      </div>
    </div>
  );
}

