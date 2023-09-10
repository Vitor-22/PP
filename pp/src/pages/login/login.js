import { CustomForm, Logo, CustomP, CustomInput, CustomInputSubmit, CustomLabel, CustomLink, FormContainer, TitleDoIt } from './styled';
import logoImg from '../../assets/logo.png';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  document.body.style.overflow = 'hidden'; //  Corta o conteúdo que ultrapassa o tamanho da DIV

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState ('')

  const navigate = useNavigate()

  const goToHome = ()=>{
    navigate("Inicial")
  }

  const goToCadastro = ()=>{
    navigate("Cadastro")
  }

  const saveUserInfoLocalStorage = (token)=>{
    localStorage.setItem('token', token)
    localStorage.setItem('email', email)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    const credentials = {email, password}

  axios.post('http://localhost:8000/login', credentials, {
  headers: {
    'Content-Type': 'application/json',
  },
  }). then(response =>{
  alert(response.data.message)
  saveUserInfoLocalStorage(response.data.token)
  goToHome()

  })
  .catch(error => console.log(error))

}

  return (
    <>
      <FormContainer>
        
        <CustomForm onSubmit={handleSubmit}>
        <Logo src={logoImg}/>
          <CustomLabel>Email</CustomLabel>
          <CustomInput type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>

          <CustomLabel>Senha</CustomLabel>
          <CustomInput type='password' value={password} onChange={(e)=> setPassword(e.target.value)} />

          <CustomInputSubmit class="submit" id="submit" value="Entrar" type="submit" /> 

          <CustomP>Não possui conta? <CustomLink onClick={goToCadastro}>Cadastre-se</CustomLink></CustomP>
        </CustomForm>

      </FormContainer>
      </>
  );
};

export default Login;