import { Container, Footer, Header, Section } from '../styles/Home.styles';
import React from 'react';
import Typography from '@mui/material/Typography';
import NavBar from '../components/navBar';
import PhotoViewer from '../components/PhotoViewer';

function Main() {
  return (
    <Container>
      <Header>
        <NavBar />
      </Header>

      <Section>
        <Typography variant="h1"> Apresentação</Typography>
        <PhotoViewer />
      </Section>

      <Section>
        <Typography variant="h2">Conhecimentos</Typography>
      </Section>

      <Section>
        <Typography variant="h2">Projetos</Typography>
      </Section>

      <Footer>FOOTER</Footer>
    </Container>
  );
}

export default Main;
