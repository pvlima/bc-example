import React from 'react';

import { Container, Content } from './styles';

import logo from '../../../assets/bomcupom-marca.png';

const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="BomCupom" />
        <h3>Teste Paulo Vitor Correia Lima</h3>
      </Content>
    </Container>
  );
};

export default Header;
