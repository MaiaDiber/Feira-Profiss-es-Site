import { BrowserRouter, Routes, Route } from "react-router";
import Primeira from "./pages/Primeira.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Login from "./pages/Login.jsx"

export default function Navegacao(){
    return (
        <BrowserRouter>
    <Routes>
        <Route path="/" element={<Primeira/>}/> 
        <Route path="/Cadastro" element={<Cadastro/>}/>
        <Route path="/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    )
    

}