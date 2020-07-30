import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

//background do nosso site
const AppWrapper = styled.div`
  background var(--grayDark);

  --bodyPaddingTop: 94px;
  padding-top: var(--bodyPaddingTop);

  @media (max-width: 800px){
    --bodyPaddingTop: 4opx;
    padding-top: var(--bodyPaddingTop);

  }
`;

function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
         videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
         url={dadosIniciais.categorias[0].videos[0].url}
         videoDescription={"O que é o Front-end? Trabalhando na área"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />
      
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </AppWrapper>
  );
}

export default Home;
