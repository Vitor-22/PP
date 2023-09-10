import Header from "../../componentes/Header/Header";
import { DivPrincipal, DivInicio, DivSuperior, DivCalendarios, DivSuperiorEsquerda, ProximasData, DivSuperiorDireita, DivDivs, DivTitulos, TituloDasDivs, Pinicio, NomePerfil, ImgPerfil, DivProximosExames} from "./principal.jsx";
import perfil from '../../assets/Perfil.png';
import { useNavigate } from "react-router-dom";

function Inicial (){
  document.body.style.overflow = 'hidden';

  const navigate = useNavigate()

  const goToExames = ()=>{
    navigate("Exames")
  }

  return(
    <>
    <DivPrincipal>
        <Header/>
        <DivInicio>
          <DivSuperior>

            <DivSuperiorEsquerda>
              <Pinicio>Início</Pinicio>
            </DivSuperiorEsquerda>

            <DivSuperiorDireita>
              <NomePerfil>Nelsi Soares</NomePerfil>
              <ImgPerfil src={perfil}/>
            </DivSuperiorDireita>

          </DivSuperior>

          <DivDivs>

          <DivProximosExames>
            <DivTitulos>
              <TituloDasDivs>Próxima consulta</TituloDasDivs>
            </DivTitulos>
            <DivCalendarios>
              <ProximasData>19/11/2023</ProximasData>
            </DivCalendarios>
          </DivProximosExames>

          <DivProximosExames onClick={goToExames}>
            <DivTitulos>
              <TituloDasDivs>Próximo exame</TituloDasDivs>
            </DivTitulos>
            <DivCalendarios>
              <ProximasData>25/11/2023</ProximasData>
            </DivCalendarios>
          </DivProximosExames>

          </DivDivs>
        </DivInicio>
    </DivPrincipal>
    </>
  )
}

export default Inicial;