import {
  Apresentation,
  Container,
  Footer,
  Header,
  SectionProfile,
  SectionProjects,
  SectionSkills,
} from '../styles/Home.styles';
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

      <Apresentation>
        <SectionProfile>
          <Typography variant="h2" style={{ color: 'white', fontSize: '40px' }}>
            Olá👋,
          </Typography>
          <Typography variant="h2" style={{ color: 'white', fontSize: '40px' }}>
            Meu Nome é
          </Typography>
          <Typography
            variant="h2"
            style={{ color: '#13B0F5', fontSize: '40px' }}
          >
            José Davi
          </Typography>
        </SectionProfile>
        <PhotoViewer />
      </Apresentation>

      <SectionSkills>
        <Typography
          variant="h2"
          style={{
            color: '#42446E',
            fontSize: '35px',
            textAlign: 'center',
          }}
        >
          Conhecimentos
        </Typography>
        <Typography variant="subtitle1" style={{ color: 'white' }}>
          Tecnologia utilizadas normalmente por mim
        </Typography>
      </SectionSkills>

      <SectionProjects>
        <Typography
          variant="h2"
          style={{
            color: '#42446E',
            fontSize: '35px',
            textAlign: 'center',
          }}
        >
          Projetos
        </Typography>
      </SectionProjects>
      <Footer>FOOTER</Footer>
    </Container>
  );
}

export default Main;
