import Header from "../../componentes/Header/Header";
import { DivInicio, DivTipoCard, IconExame, SubtituloData, DivDataCard, DivIconExame, DivExamesCard, DivTipo, SubtitulosDetalhes, DivData, DivDetalhes, DivSubtitulosExames, IconMais, TituloResultados, DivExamesSuperiorEsquerda, DivExamesSuperiorDireita, DivExamesSuperior, DivExamesPrincipal, DivPrincipal,  DivSuperior, DivSuperiorEsquerda, Pinicio, DivSuperiorDireita, NomePerfil, ImgPerfil } from "./styled";
import perfil from '../../assets/Perfil.png';
import mais from '../../assets/mais.png';
import iconexame from '../../assets/iconexames.png';
import PublicarModal from "../../componentes/Header/PublicarModal/PublicarModal";
import { useNavigate } from "react-router-dom";
import {
    Modal,
    ModalOverlay,
    ModalContent,
} from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";
import Publicacao from "../../componentes/Header/publicacao/publicacao";
import { useEffect, useState } from "react";
import { api } from '../../services/api';

function Exames (){
    document.body.style.overflow = 'hidden';

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [posts, setPosts] = useState([])

    const idUser = localStorage.getItem("user")

    console.log("oiiii", idUser)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/post/posts/${idUser}`);

                console.log(response.data)

                if (response.data) {
                    setPosts(response.data.data)
                } else {
                    alert('Não foi possível puxar os posts');
                }
            } catch (error) {
                alert('Erro ao buscar os dados. Verifique o console para mais detalhes.');
            }
        };

        fetchData(); 
    });

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
                        <IconMais src={mais} onClick={onOpen}/>
                        <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <PublicarModal close={onClose} />
                        </ModalContent>
                        </Modal>
                    </DivExamesSuperiorDireita>
                </DivExamesSuperior>

                <DivSubtitulosExames>
                    <DivDetalhes><SubtitulosDetalhes>Exames</SubtitulosDetalhes></DivDetalhes>
                    <DivData><SubtitulosDetalhes>Data</SubtitulosDetalhes></DivData>
                    <DivTipo><SubtitulosDetalhes>Tipo</SubtitulosDetalhes></DivTipo>
                </DivSubtitulosExames>

            
                {posts.map((posts, index) => (
                    <Publicacao key={index} post={posts} conteudo={posts.dataexame} criado={posts.tipoexame}/>
                ))}

            </DivExamesPrincipal>

        </DivInicio>

        </DivPrincipal>
        </>
    )
}

export default Exames;