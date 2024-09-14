import { useState } from "react"
import "./StyleJuntarParejas.css"



export default function JuntarParejas(){

    const [restarGame, setRestarGame]=useState(0)
    let array= [1,2,3,4,5,6,7,8,9,10]
    


    return(
        <div className="first_container">
            {/* header */}
            <div className="header_couples">
            <h2 className="title_couples play"> ENCUENTRA LA PAREJA</h2>
            <h2 className="count play">Numero de intentos: {restarGame} </h2>
            </div>

            {/* juego */}

            <div className="find_pairs">
                <div className="btns">
                    <button className="botones">h</button>
                    <button className="botones">h</button>
                    <button className="botones">h</button>
                    <button className="botones">h</button>
                    <button className="botones">h</button>
                </div>
                <div className="btns">
                <button className="botones">h</button>
                    <button className="botones">h</button>
                    <button className="botones">h</button>
                    <button className="botones">h</button>
                    <button className="botones">h</button>
                </div>
                <div className="btns">
                <button className="botones">h</button>
                    <button className="botones">h</button>
                    <button className="botones">h</button>
                    <button className="botones">h</button>
                    <button className="botones">h</button>
                </div>
                <div className="btns">
                <button className="botones">h</button>
                    <button className="botones">h</button>
                    <button className="botones">h</button>
                    <button className="botones">h</button>
                    <button className="botones">h</button>
                </div>

            </div>
            <div className="btn_reiniciar" onClick={()=>{
                setRestarGame(restarGame=0)
            }}>Reiniciar el juego</div>

        </div>
    )
}