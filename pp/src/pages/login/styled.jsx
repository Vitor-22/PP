import styled from "styled-components";
import fundo from "../../assets/a.jpg"

export const Logo = styled.img`
  margin-top: 5%;
  width: 3vw;
  margin-left: 45%;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${fundo});
  background-size: cover;
  background-position: center;
`

export const CustomForm = styled.form`
  border-radius: 30px;
  margin-top: 5%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo com transparência */
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 70vh;
`

export const CustomInput = styled.input`
  background-color: #EAF8BC;
  height: 7vh;
  width: 80%;
  margin-left: 3vw;
  border: none;
  border-radius: 20px;
  margin-bottom: 5px;
  padding: 10px;
  color: black;
    ::placeholder {
      margin-right: 5px;
      padding: 10px;
}
`;

export const CustomInputSubmit = styled.input`
  height: 7vh;
  width: 80%;
  margin-left: 3.5vw;
  border: none;
  border-radius: 20px;
  margin-top: 5vh;
  background-color: #030202;
  color: white;
  font-weight: bold;
  cursor: pointer;
`

export const CustomLabel = styled.label`
  margin-left: 3vw;
  margin-top: 2vh;
  font-weight: bold;
  color: white;
  font-family: Nunito;
`

export const CustomLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-family: Nunito;
    a:visited {
      color: black;
    }
`
export const CustomP = styled.p`
  font-family: Nunito;
  font-weight: bold;
  margin-left: 3.5vw;
  color: white;
`