import React from 'react';
import { BoxCircle, Container } from '../styles/PhotoViewer.styles';
import MyPhoto from '../icons/MyPhoto.png';

class PhotoViewer extends React.Component {
  render() {
    return (
      <Container>
        <BoxCircle src={MyPhoto} alt="MyPhoto"></BoxCircle>
      </Container>
    );
  }
}

export default PhotoViewer;
