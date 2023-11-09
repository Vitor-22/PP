import { CustomForm, Logo, CustomP, CustomInput, CustomInputSubmit, CustomLabel, CustomLink, FormContainer } from './styled';
import logoImg from '../../assets/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

function Login() {
  document.body.style.overflow = 'hidden'; //  Corta o conteúdo que ultrapassa o tamanho da DIV

  const[user_email, setUserEmail] = useState("");
  const[user_password, setUserPassword] = useState("");

  const navigate = useNavigate()

  const goToCadastro = ()=>{
    navigate("/cadastro")
  }

  const goToHome = ()=>{
    navigate("/principal")
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        user_email,
        user_password
    };
    try{
        console.log(data);
        const response = await api.post('/login', data);

        console.log(response.data);

        if (response.data.success) {
            alert('Login concluído');
            // redireciona para home
            goToHome()
        } else {
            alert('Não foi possível entrar');
        }
           
    } catch(error){
        console.log(error)
    }

  }
  return (
    <>
      <FormContainer>
        
        <CustomForm onSubmit={handleSubmit}>
        <Logo src={logoImg}/>
          <CustomLabel>Email</CustomLabel>
          <CustomInput type="text"
                            id="usuario"
                            placeholder="0632454567@senacrs.edu.br"
                            value={ user_email }
                            onChange = {(e) => setUserEmail(e.target.value)}
                            />
          <CustomLabel>Senha</CustomLabel>
          <CustomInput type="password"
                            id="senha"
                            placeholder="Enter your password"
                            value={ user_password } 
                            onChange = {(e) => setUserPassword(e.target.value)}
                            />

          <CustomInputSubmit class="submit" id="submit" value="Entrar" type="submit" /> 

          <CustomP>Não possui conta? <CustomLink onClick={goToCadastro}>Cadastre-se</CustomLink></CustomP>
        </CustomForm>

      </FormContainer>
      </>
  );
};

export default Login;