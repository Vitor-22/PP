import React, { useState } from 'react';
import { Conteudo, Titulo, Textarea, PublishButton, SelectCustom, Titulo2 } from './styled';
import { api } from '../../../services/api';

const PublicarModal = ({ onPublish }, props) => {
  const [dataexame, setDataExame] = useState('');
  const [tipoexame, setTipoExame] = useState('');
  const [imgexame, setImgExame] = useState('');

  const idUser = localStorage.getItem("user")

  const handlePublish = async (props) => {
    const data = {
      data_post: dataexame,
      img_post: imgexame,
      tipo_exame: tipoexame,
      id: idUser
  
    };
    console.log(idUser)
    console.log(data);
    const response = await api.post('post/create', data);

    if (response.data.success) {
      alert('Post Criado');
    } else {
      alert('Não foi possível criar o post');
    }
  }
  return (
    <Conteudo>
      <Titulo>Insira os dados do seu exame</Titulo>
      <Titulo2>Selecione a data de realização do exame</Titulo2>
      <Textarea
        placeholder="Digite sua contribuição aqui..."
        type = "date"
        value={dataexame}
        onChange={(e) => setDataExame(e.target.value)
        }
      />

      <Titulo2>Selecione o tipo do exame realizado</Titulo2>
      <SelectCustom
                              id="sexo" required
                              value={tipoexame}
                              onChange={(e) => setTipoExame(e.target.value)}
                              >
                              <option value="">Selecione o tipo...</option>
                              <option value="raio-x">Raio-X</option>
                              <option value="mamografia">Mamografia</option>
                              <option value="radiografia">Radiografia</option>
                              
      </SelectCustom >

      <Titulo2>Selecione a imagem do exame</Titulo2>
      <Textarea
        type = "file"
        value={imgexame}
        onChange={(e) => setImgExame(e.target.value)
        }
      />
      <br/>
      <PublishButton onClick={handlePublish}>Publicar</PublishButton>
    </Conteudo>
  );
};

export default PublicarModal;