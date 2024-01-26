import { Body, Footer, Header } from './Main.styles';
import {Fragment} from 'react';
import React from 'react';

function Main(){
    return(
        <Fragment>
            <Header id='head-app'>teste header</Header>
            <Body id='body-app'>teste body</Body>
            <Footer id='footer-app'>teste footer</Footer>
        </Fragment>
    )
}

export default Main;