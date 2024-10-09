import "./styleInicioSesion.css"
import { useNavigate } from "react-router-dom"
export default function InicioSesion(){

    const navigate= useNavigate()
    

    return(
        <div>
            
            <div className="first-container">
            <h1>GAME ON</h1>
            </div>

            <div className="video_games">

            <div className="juegos triqui">
                <img src="https://dl.memuplay.com/new_market/img/tic.tac.toe.two.player.board.games.icon.2022-06-26-09-40-46.png" alt="triqui" onClick={()=>{
                    navigate("/triqui")
                }}/>
            </div>
            <div className="juegos jutnar_parejas ">
                <img src="https://www.cokitos.com/wp-content/uploads/2022/06/memory-master-frutas.jpg" alt="triqui" onClick={()=>{
                    navigate("/juntarparejas")
                }}/>
            </div>
            <div className="juegos ahorcado">
                <img src="https://th.bing.com/th/id/OIG2.Ata0aei4iZ25c.b.07Nn?pid=ImgGn" alt="triqui" />
            </div>
            




            </div>
    </div>
    )
}