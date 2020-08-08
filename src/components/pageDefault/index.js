/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu/index';
import Footer from '../Footer';

// styled é o que permite colocar css dentro do javascript

const Main = styled.main`
    background-color:  var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 100px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll }) => css`
      padding: ${paddingAll};    
    `}
    `;

// todo componente precisa ter uma estrutura em volta, por exemplo, <div>
function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
