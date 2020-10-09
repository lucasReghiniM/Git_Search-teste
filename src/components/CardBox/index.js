import React, { useEffect, useState } from 'react';

import { Container, Circulo, Icon, Icon2, Icon3, Title, SubTitle } from './styles';

const CardBox = ({titulo, subtitulo, icon}) => {
  const [iconHTML, setIconHTML] = useState();

  useEffect(() => {
    renderIcon();

  },[icon])

  const renderIcon = () => {
    switch (icon) {
      case 1: 
        setIconHTML(<Icon className="icone"/>)
        break;

      case 2: 
        setIconHTML(<Icon2 className="icone"/>)
        break;

      case 3: 
        setIconHTML(<Icon3 className="icone"/>)
        break;    
    
      default:
        break;
    }
  }

  return (

    <Container>
      <Circulo className="circle">
        {iconHTML}
      </Circulo>
      <Title className="titu">
        {titulo}
      </Title>
      <SubTitle className="sub">
        {subtitulo}
      </SubTitle>
    </Container>
  );
};

export default CardBox;
