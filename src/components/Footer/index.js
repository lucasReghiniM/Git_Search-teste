import React from 'react';

import { Container, LinksContainer, Circulo, CircleWrapper} from './styles';

import gitWord from '../../assets/gitWord.svg';
import linkedinWord from '../../assets/linkedinWord.svg';

const Footer = () => {
  return (
    <Container>
        
          <h1>Lucas Reghini Magalhães</h1>
          <h3>Dev frontend e webdesigner</h3>
        
        <LinksContainer>
          <CircleWrapper href="https://github.com/lucasReghiniM?tab=repositories">
            <Circulo>
              <img src={gitWord} alt="Github" className="git"/>
            </Circulo>
            <h2>Portifolio</h2>
          </CircleWrapper>
          
          <CircleWrapper href="https://www.linkedin.com/in/lucasreghini/">
          <Circulo>
            <img src={linkedinWord} alt="Linkedin" className="linkedin"/>
            </Circulo>
            <h2>Linkedin</h2>
          </CircleWrapper>
        </LinksContainer>

    </Container>
  );
};

export default Footer;
