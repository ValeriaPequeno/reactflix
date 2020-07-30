import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
//styled é o que permite colocar css dentro do javascript
import styled from 'styled-components';

const Main = styled.main`
    background-color:  var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 100px;
    padding-left: 5%;
    padding-right: 5%;

`;



//todo componente precisa ter uma estrutura em volta, por exemplo, <div>
function PageDefault({children}){
  return(
      <>
        <Menu />
            <Main>
                {children}
            </Main>
        <Footer />
      </>
  )
}

export default PageDefault;