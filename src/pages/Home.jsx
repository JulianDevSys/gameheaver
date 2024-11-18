import {Outlet} from 'react-router-dom'
import Register from'../formulario/Register'
export default function Home() {
return  <div className="container-forms">
            <Outlet/> 
            <img className="image-background" src="https://img.freepik.com/premium-photo/close-up-video-game-controller-with-glowing-background-generative-ai_958165-67390.jpg" alt="" />
        </div>
}