import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Admin } from "./pages/admin";
import { Agendamento } from "./pages/agendamento";

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
  }
]);

export {router};