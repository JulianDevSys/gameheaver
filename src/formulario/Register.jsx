import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./styleRegister.css";
import swal from "sweetalert2"
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
    
      async function RegisterDatas(e){
        if(!getDatas.correo.includes("@") ){
         return swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!, dont have @",
        
        })
        }
        
        if(getDatas.password.length<=10){
          return swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!, minimum 10 words",
          
          })
        }
        e.preventDefault()
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

