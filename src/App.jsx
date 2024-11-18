import Home from "./pages/Home";
import Register from "./formulario/Register";
import Login from "./formulario/login";
import InicioSesion from "./pages/InicioSesion";
import Triqui from "./juegos/Triqui";
import JuntarParejas from "./juegos/JuntarParejas";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import "./app.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path:"/", element: <Login /> },
      
      { path: "/register", element: <Register /> },
      
    ],
   
  },
   { path: "/inicioSesion", element: <InicioSesion /> ,
   },
   { path:"triqui", element: <Triqui /> },
  { path:"juntarParejas", element: <JuntarParejas /> },
   
  
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
export default App;
