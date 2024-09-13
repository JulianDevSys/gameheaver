import "./styleTriqui.css"
import db from './db.json'
import { useState,useEffect } from "react";

export default function Triqui(){
    let [message, setMessage] = useState('');

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

        <div className="title">
        <p>{message}</p>
        </div>

        </div>
    )
}