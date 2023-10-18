import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";
import Inicial from "../pages/principal/principal";
import Exames from "../pages/exames/exames";
import Cadastro from "../pages/cadastro/cadastro";
import Receitas from "../pages/receitas/receitas";

function Rotas(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="receitas" element={<Receitas/>}/>
            <Route path="inicial" element={<Inicial/>}/>
            <Route path="cadastro" element={<Cadastro/>}/>
            <Route path="exame" element={<Exames />}/>
            <Route index element={<Login/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Rotas;