import React from "react";
import { CustomForm, CustomInput, CustomLabel, CustomLink, FormContainer, Logo, CustomInputSubmit, CustomP} from './styled';
import logoImg from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";

function Cadastro (){
    document.body.style.overflow = 'hidden';

    const navigate = useNavigate()

    const goToLogin = ()=>{
        navigate("/")
      }

    return(
    <>
    <FormContainer>
        <CustomForm>
        <Logo src={logoImg}/>
        <CustomLabel>Nome</CustomLabel>
        <CustomInput type="text" id="usuario" placeholder="Fulano Ciclano" />
        
        <CustomLabel>Email</CustomLabel>
        <CustomInput type="text" id="email" placeholder="0632454567@senacrs.edu.br"/>

        <CustomLabel>Senha</CustomLabel>
        <CustomInput type="password" id="senha" placeholder="Digite sua senha"/>
        
        <CustomInputSubmit class="submit" id="submit" value="Criar conta" type="submit"></CustomInputSubmit>
        <CustomP>Já possui conta? <CustomLink onClick={goToLogin}>Login</CustomLink></CustomP>
       </CustomForm>
    </FormContainer>
    </>
    )
}

export default Cadastro;