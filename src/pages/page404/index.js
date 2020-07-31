import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo2.png';
import {LogoImage, MenuWrapper} from '../../components/Menu/style.js';

const Main = styled.main`
    background-color: var(--primary);
    flex: 1;
    padding-top: 100px;
    padding-left: 5%;
    padding-right: 5%;
    min-height: 100vh;
    color: white;
    justify-content: center;
`;

function Page404({children}){
  return(
      <>
        <MenuWrapper className="Menu">
            <Link to="/" >
            <LogoImage src={Logo} alt="Logo da minha página" />
            </Link>
            <h2 style = {{textAlign: 'center', color: 'white'}}> 404 - Página não encontrada</h2>
        </MenuWrapper>
        <Main>
            <p align="center"><iframe title='Jogo' src="https://mariosouto.com/flappy-bird-devsoutinho/" width="340" height = "600" overflow="hidden" marginHeight="0" marginWidth="0" scrolling="auto"></iframe></p>
        </Main>
        <Footer />
      </>
  )
}

export default Page404;