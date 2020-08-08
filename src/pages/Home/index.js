/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import Menu from '../../components/Menu';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
// import Footer from '../../components/Footer';
import PageDefault from '../../components/pageDefault';
import categoriasRepository from '../../repositories/categorias';

/*
// background do nosso site
const AppWrapper = styled.div`
  background var(--grayDark);

  --bodyPaddingTop: 94px;
  padding-top: var(--bodyPaddingTop);

  @media (max-width: 800px){
    --bodyPaddingTop: 4opx;
    padding-top: var(--bodyPaddingTop);

  }
`;
*/

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // hppt://localhost:8080/categorias?_embed=videos

  return (
    <PageDefault paddingAll={0}>
      { /* {JSON.stringify(dadosIniciais)} */ }
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
