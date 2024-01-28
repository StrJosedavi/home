import React from 'react';
import { Line, Linker, List, Nav } from '../styles/navBar.styles';

class NavBar extends React.Component {
  render() {
    return (
      <Nav>
        <List>
          <Line>
            <Linker href="#home">Início</Linker>
          </Line>
          <Line>
            <Linker href="#Sobre">Sobre</Linker>
          </Line>
          <Line>
            <Linker href="#Conhecimentos">Conhecimentos</Linker>
          </Line>
          <Line>
            <Linker href="#Projetos">Projetos</Linker>
          </Line>
          <Line>
            <Linker href="#Contato">Contato</Linker>
          </Line>
        </List>
      </Nav>
    );
  }
}

export default NavBar;
