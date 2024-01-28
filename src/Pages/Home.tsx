import { Div, Footer, Header, Section } from '../styles/Home.styles';
import React from 'react';
import Typography from '@mui/material/Typography';
import NavBar from '../components/navBar';

function Main() {
  return (
    <Div>
      <Header>
        <NavBar />
      </Header>

      <Section>
        <Typography variant="h1"> Apresentação</Typography>
      </Section>

      <Section>
        <Typography variant="h2">Conhecimentos</Typography>
      </Section>

      <Section>
        <Typography variant="h2">Projetos</Typography>
      </Section>

      <Footer>FOOTER</Footer>
    </Div>
  );
}

export default Main;
