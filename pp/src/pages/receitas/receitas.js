import Header from "../../componentes/Header/Header";
import { DivInicio, DivTipoCard, IconExame, SubtituloData, DivDataCard, DivIconExame, DivExamesCard, DivTipo, SubtitulosDetalhes, DivData, DivDetalhes, DivSubtitulosExames, IconMais, TituloResultados, DivExamesSuperiorEsquerda, DivExamesSuperiorDireita, DivExamesSuperior, DivExamesPrincipal, DivPrincipal,  DivSuperior, DivSuperiorEsquerda, Pinicio, DivSuperiorDireita, NomePerfil, ImgPerfil } from "./receitas.jsx";
import perfil from '../../assets/Perfil.png';
import mais from '../../assets/mais.png';
import iconexame from '../../assets/iconexames.png';

function Receitas(){

    document.body.style.overflow = 'hidden';
    return(
        <>
        <DivPrincipal>
        <Header/>
        <DivInicio>
            <DivSuperior>

            <DivSuperiorEsquerda>
                <Pinicio>Receitas</Pinicio>
            </DivSuperiorEsquerda>

            <DivSuperiorDireita>
                <NomePerfil>Nelsi Soares</NomePerfil>
                <ImgPerfil src={perfil}/>
            </DivSuperiorDireita>

            </DivSuperior>

            <DivExamesPrincipal>

                <DivExamesSuperior>
                    <DivExamesSuperiorEsquerda>
                    </DivExamesSuperiorEsquerda>
                    <DivExamesSuperiorDireita>
                        <IconMais src={mais}/>
                    </DivExamesSuperiorDireita>
                </DivExamesSuperior>

                <DivSubtitulosExames>
                    <DivDetalhes><SubtitulosDetalhes>Receitas</SubtitulosDetalhes></DivDetalhes>
                    <DivData><SubtitulosDetalhes>Data</SubtitulosDetalhes></DivData>
                </DivSubtitulosExames>

                <DivExamesCard>
                    <DivIconExame>
                        <IconExame src={iconexame}/>
                    </DivIconExame>
                    <DivDataCard>
                        <SubtituloData>26/05/2022</SubtituloData>
                    </DivDataCard>
                </DivExamesCard>

                <DivExamesCard>
                    <DivIconExame>
                        <IconExame src={iconexame}/>
                    </DivIconExame>
                    <DivDataCard>
                        <SubtituloData>05/09/2022</SubtituloData>
                    </DivDataCard>
                </DivExamesCard>

            </DivExamesPrincipal>

        </DivInicio>

        </DivPrincipal>
        </>
    )
}

export default Receitas;