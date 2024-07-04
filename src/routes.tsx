import {Routes, Route} from "react-router-dom";
import Login from "./pages/login"
import Recuperar from "./pages/recuperar-senha";
import Redefinir from "./pages/redefinir-senha";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/recuperar" element={<Recuperar/>}/>
      <Route path="/redefinir" element={<Redefinir/>}/>
    </Routes>
  )
}

export default MainRoutes;