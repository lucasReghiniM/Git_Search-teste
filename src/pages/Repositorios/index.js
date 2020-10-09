import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, ArrowIcon, InfoContainer, TextWrapper, RepoWrapper } from './styles';
import logoEngrenagem from '../../assets/logoEngrenagem.svg';
import githubMark from '../../assets/githubMark.svg';


const Repositorios = () => {
  const itens = [{
    repo: "chat",
  }]
  const username = "LucasRM"

  //state do html
  const [linkHTML, setLinkHTML] = useState();

  const renderItem = () => {
    let array = [] 

    itens.map(item => {
      return(
        array.push(<li>{item.repo}</li>)
      )
    })
    setLinkHTML(array); 
  }

  useEffect(() => {
    renderItem();

  },[itens])


  return (
    <Container>
      <img src={logoEngrenagem} alt="" className="engrenagem"/>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <ArrowIcon />
      </Link>
      <InfoContainer>
        <TextWrapper>
          <img src={githubMark} alt=""/>
          <h1>
            
             {username} Repositorios
          </h1>
        </TextWrapper>
        <RepoWrapper>
          {linkHTML}
        </RepoWrapper>
      </InfoContainer>
    </Container>
  );
};

export default Repositorios;
