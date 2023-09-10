import { DivLogo, DivMenuEsquerda, Logo, DivBotoes, DivIcon, DivPalavras, ImgIcon, PalavrasMenu, DivSair, ImgIcon1} from "./styled";
import logoImg from '../../assets/logo.png';
import icon1 from '../../assets/Icon1.png';
import icon2 from '../../assets/Icon2.png';
import icon3 from '../../assets/Icon3.png';
import sair from '../../assets/sair.png';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Header (){

    const navigate = useNavigate()

    const handleLogout = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('/')
    }

    const goToExames = ()=>{
        
    }

    return(
        <DivMenuEsquerda>
            <DivLogo>
                <Logo src={logoImg}/>
            </DivLogo>

            <DivBotoes>
                <DivIcon>
                    <ImgIcon src={icon1}/>
                </DivIcon>
                <DivPalavras>
                    <PalavrasMenu>Inicio</PalavrasMenu>
                </DivPalavras>
            </DivBotoes>

            <DivBotoes>
                <DivIcon>
                    <ImgIcon src={icon2}/>
                </DivIcon>
                <DivPalavras>
                    <PalavrasMenu>Exames</PalavrasMenu>
                </DivPalavras>
            </DivBotoes>

            <DivBotoes>
                <DivIcon>
                    <ImgIcon src={icon3}/>
                </DivIcon>
                <DivPalavras>
                    <PalavrasMenu>Receitas</PalavrasMenu>
                </DivPalavras>
            </DivBotoes>

            <DivBotoes>
                <DivIcon>
                    <ImgIcon src={icon3}/>
                </DivIcon>
                <DivPalavras>
                    <PalavrasMenu>Calendario</PalavrasMenu>
                </DivPalavras>
            </DivBotoes>

            <DivSair>
                <DivIcon>
                    <ImgIcon1 src={sair}/>
                </DivIcon>
                <DivPalavras>
                    <PalavrasMenu onClick={handleLogout}>Sair</PalavrasMenu>
                </DivPalavras>
            </DivSair>
        </DivMenuEsquerda>
    )
}

export default Header;