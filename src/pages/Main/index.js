import React from 'react';

import { Container, Wrapper, ArrowIcon } from './styles';
import logoEngrenagem from '../../assets/logoEngrenagem.svg';
import SearchContainer from '../../components/SearchContainer'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer'


const Main = () => {
  return (
    <Container>
      <img src={logoEngrenagem} alt="" className="engrenagem"/>
      <Wrapper>
          <SearchContainer  /> 
        <ArrowIcon />
      </Wrapper>
      <Cards />
      <Footer />
    </Container>
  );
};

export default Main;
