import { BrowserRouter, Routes, Route } from "react-router";

import Primeira from "./pages/Primeira";
import Segunda from "./pages/Segunda";

export default function Navegacao(){
    return (
        <BrowserRouter>
    <Routes>
        <Route path="/" element={<Primeira/>}/> 
        <Route path="/Segunda" element={<Segunda/>}/>
    </Routes>
    </BrowserRouter>
    )
    

}