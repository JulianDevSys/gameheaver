import Home from "./pages/Home";
import Register from "./formulario/Register";
import Login from "./formulario/login";
import InicioSesion from "./pages/InicioSesion";
import Triqui from "./juegos/Triqui";
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
   
  
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
export default App;
