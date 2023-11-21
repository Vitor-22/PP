import styled from 'styled-components';

export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #363740;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

export const Conteudo = styled.div`
  background-color: #363740;
  border-radius: 10px;
  padding: 70px;
  width: 510px;
  height: 520px;
  text-align: center;
  position: relative;
`;

export const Titulo = styled.h2`
  color: #fff;
  font-size: 23px;
  margin-top: -20px;
`;

export const Textarea = styled.input`
  width: 22vw;
  height: 8vh;
  padding: 10px;
  margin: 10px 0;
  border-radius: 15px;
`;

export const PublishButton = styled.button`
  background-color: #3498db; /* Azul claro */
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
`;

export const SelectCustom = styled.select`
  width: 22vw;
  border-radius: 10px;
  height: 8vh;
  background-color: white;
  border: none;
  color: black;
`

export const Titulo2 = styled.h2`
  color: white;
  font-size: 16px;
  margin-top: 20px;
`