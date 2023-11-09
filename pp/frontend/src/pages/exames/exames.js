import Header from "../../componentes/Header/Header";
import { DivInicio, DivTipoCard, IconExame, SubtituloData, DivDataCard, DivIconExame, DivExamesCard, DivTipo, SubtitulosDetalhes, DivData, DivDetalhes, DivSubtitulosExames, IconMais, TituloResultados, DivExamesSuperiorEsquerda, DivExamesSuperiorDireita, DivExamesSuperior, DivExamesPrincipal, DivPrincipal,  DivSuperior, DivSuperiorEsquerda, Pinicio, DivSuperiorDireita, NomePerfil, ImgPerfil } from "./styled";
import perfil from '../../assets/Perfil.png';
import mais from '../../assets/mais.png';
import iconexame from '../../assets/iconexames.png';

function Exames (){
    document.body.style.overflow = 'hidden';
    return(
        <>
        <DivPrincipal>
        <Header/>
        <DivInicio>
            <DivSuperior>

            <DivSuperiorEsquerda>
                <Pinicio>Exames</Pinicio>
            </DivSuperiorEsquerda>

            <DivSuperiorDireita>
                <NomePerfil>Nelsi Soares</NomePerfil>
                <ImgPerfil src={perfil}/>
            </DivSuperiorDireita>

            </DivSuperior>

            <DivExamesPrincipal>

                <DivExamesSuperior>
                    <DivExamesSuperiorEsquerda>
                        <TituloResultados>Resultados</TituloResultados>
                    </DivExamesSuperiorEsquerda>
                    <DivExamesSuperiorDireita>
                        <IconMais src={mais}/>
                    </DivExamesSuperiorDireita>
                </DivExamesSuperior>

                <DivSubtitulosExames>
                    <DivDetalhes><SubtitulosDetalhes>Exames</SubtitulosDetalhes></DivDetalhes>
                    <DivData><SubtitulosDetalhes>Data</SubtitulosDetalhes></DivData>
                    <DivTipo><SubtitulosDetalhes>Tipo</SubtitulosDetalhes></DivTipo>
                </DivSubtitulosExames>

                <DivExamesCard>
                    <DivIconExame>
                        <IconExame src={iconexame}/>
                    </DivIconExame>
                    <DivDataCard>
                        <SubtituloData>26/05/2022</SubtituloData>
                    </DivDataCard>
                    <DivTipoCard>
                        <SubtituloData>Mamografia</SubtituloData>
                    </DivTipoCard>
                </DivExamesCard>

                <DivExamesCard>
                    <DivIconExame>
                        <IconExame src={iconexame}/>
                    </DivIconExame>
                    <DivDataCard>
                        <SubtituloData>05/09/2022</SubtituloData>
                    </DivDataCard>
                    <DivTipoCard>
                        <SubtituloData>Raio-X</SubtituloData>
                    </DivTipoCard>
                </DivExamesCard>

            </DivExamesPrincipal>

        </DivInicio>

        </DivPrincipal>
        </>
    )
}

export default Exames;