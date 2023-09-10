import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";
import Inicial from "../pages/principal/principal";
import Exames from "../pages/exames/exames";
import Cadastro from "../pages/cadastro/cadastro";

function Rotas(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="Inicial" element={<Inicial/>}/>
            <Route path="Cadastro" element={<Cadastro/>}/>
            <Route path="Exame" element={<Exames/>}/>
            <Route path="/" element={<Login/>}/>

        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Rotas;