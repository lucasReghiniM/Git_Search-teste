import React from 'react';

import { Container } from './styles';
import CardBox from '../CardBox'

const Cards = () => {
  return (
    <Container>
      <CardBox 
        icon={1}
        titulo="Procure usuarios"
        subtitulo="Pesquise usuarios da plataforma GitHub pelo seu nome e encontre quem deseja quando quiser."
      />
      <CardBox 
        icon={2}
        titulo="Lista de repositorios"
        subtitulo="Veja a lista de todos os repositorios publicos do usuario que desejar, basta pesquisar e clicar em quem deseja."
      />
      <CardBox 
        icon={3}
        titulo="100% Atualizado "
        subtitulo="Repositorios e usuarios atualizados em tempo real com 100% de precisao."
      />
    </Container>
  );
};

export default Cards;
