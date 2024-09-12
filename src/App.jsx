import Home from "./pages/Home";
import Register from "./formulario/Register";
import Login from "./formulario/login";
import InicioSesion from "./pages/InicioSesion";
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
      { path: "/inicioSesion", element: <InicioSesion /> },
    
    
    ],
  },
  
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
export default App;
