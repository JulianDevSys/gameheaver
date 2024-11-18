import "./styleTriqui.css"
import db from './db.json'
import { useState,useEffect } from "react";

export default function Triqui(){
  let [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);

    useEffect(()=>{
        
        const interval= setInterval(()=>{
        const frases= db.frases
        const inx = Math.floor(Math.random()* frases.length)
        setMessage(frases[inx])
        },4000)
    
        return () => clearInterval(interval)
    
    },[])
    return(
        <div className="first_container">

        <div className="title1">
        <p>{message}</p>


        <h1>Triqui </h1>
     

        </div>




/////////////////////////////////////////////////////7777777




        </div>
    )
}