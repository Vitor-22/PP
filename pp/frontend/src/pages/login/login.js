import { CustomForm, Logo, CustomP, CustomInput, CustomInputSubmit, CustomLabel, CustomLink, FormContainer } from './styled';
import logoImg from '../../assets/logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

function Login() {

  // const[email, setEmail] = useState("");
  // const[senha, setSenha] = useState("");

  const navigate = useNavigate()

  const goToCadastro = () => {
    navigate("/cadastro")
  }

  const goToHome = () => {
    navigate("/inicial")
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const data = {
  //       email,
  //       senha
  //   };

  //   try{
  //       const response = await api.post('/auth/login', data);

  //       console.log(response.data);

  //       if (response.data.success) {
  //           alert('Login concluído');
  //           // redireciona para home
  //           goToHome()
  //       } else {
  //           alert('Não foi possível entrar');
  //       }

  //   } catch(error){
  //       console.log(error)
  //   }

  // }


  const [user_email, setUserEmail] = useState("");
  const [user_password, setUserPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: user_email,
      password: user_password
    };


    const response = await api.post('/auth/login', formData);

    if (response.data.success) {
      alert('Usuário conectado');
      // redireciona para login
      goToHome()
    } else {
      alert('Não foi possível conectar');
    }
  }


  return (
    <>
      <FormContainer>

        <CustomForm >
          <Logo src={logoImg} />
          <CustomLabel>Email</CustomLabel>
          <CustomInput type="text"
            id="email"
            placeholder="0632454567@senacrs.edu.br"
            value={user_email}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <CustomLabel>Senha</CustomLabel>
          <CustomInput type="password"
            id="senha"
            placeholder="Enter your password"
            value={user_password}
            onChange={(e) => setUserPassword(e.target.value)}
          />

          <CustomInputSubmit onClick={handleSubmit} class="submit" id="submit" value="Entrar" type='submit' />

          <CustomP>Não possui conta? <CustomLink onClick={goToCadastro}>Cadastre-se</CustomLink></CustomP>
        </CustomForm>

      </FormContainer>
    </>
  );
};

export default Login;