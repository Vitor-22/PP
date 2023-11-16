import React from "react";
import { CustomForm, CustomInput, CustomLabel, CustomLink, FormContainer, CustomInputSubmit, CustomP } from './styled';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { api } from '../../services/api';

function Cadastro() {
    document.body.style.overflow = 'hidden';

    const [user_email, setUserEmail] = useState("");
    const [user_password, setUserPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [user_name, setUserName] = useState("");

    const navigate = useNavigate()
    const goToLogin = () => {
        navigate("/")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            nome: user_name,
            email: user_email,
            password: user_password
        };

        if (user_password !== confirm_password) {
            alert('Senhas não sõa compatíveis');
        } else {
            console.log(formData);

            const response = await api.post('/user/create', formData);
            if (response.data.success) {
                alert('Usuário cadastrado');
                // redireciona para login
                goToLogin()
            } else {
                alert('Não foi possível cadastrar');
            }
        }
    }

    return (
        <>
            <FormContainer>
                <CustomForm >
                    <CustomLabel>Nome</CustomLabel>
                    <CustomInput type="text"
                        placeholder="nome"
                        value={user_name}
                        onChange={(e) => setUserName(e.target.value)}
                    />

                    <CustomLabel>Email</CustomLabel>
                    <CustomInput type="text"
                        placeholder="0632454567@senacrs.edu.br"
                        value={user_email}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />

                    <CustomLabel>Senha</CustomLabel>
                    <CustomInput type="password"
                        placeholder="Enter your password"
                        value={user_password}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />

                    <CustomLabel>Confirmar Senha</CustomLabel>
                    <CustomInput type="password"
                        placeholder="Confirm your password"
                        value={confirm_password}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <CustomInputSubmit class="submit" id="submit" value="Criar conta" onClick={handleSubmit}></CustomInputSubmit>
                    <CustomP>Já possui conta? <CustomLink onClick={goToLogin}>Login</CustomLink></CustomP>
                </CustomForm>
            </FormContainer>
        </>
    )
}

export default Cadastro;