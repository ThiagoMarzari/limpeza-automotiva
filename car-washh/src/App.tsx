import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Admin } from "./pages/admin";
import { Agendamento } from "./pages/agendamento";
import { Login } from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/admin",
    element: <Admin/>
  },
  {
    path: "/agendamento",
    element: <Agendamento/>
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

export {router};