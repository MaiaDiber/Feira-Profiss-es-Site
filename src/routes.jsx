import { BrowserRouter, Routes, Route } from "react-router";

import Primeira from "./pages/Primeira";
import Segunda from "./pages/Segunda";
import Login from "./pages/Login"

export default function Navegacao(){
    return (
        <BrowserRouter>
    <Routes>
        <Route path="/" element={<Primeira/>}/> 
        <Route path="/Segunda" element={<Segunda/>}/>
        <Route path="/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    )
    

}