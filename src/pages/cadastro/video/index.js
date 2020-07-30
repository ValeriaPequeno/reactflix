import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';


//Os componentes nada mais são do que funções
function CadastroVideo(){
    return (
      <PageDefault>

        <h1>Cadastro de Vídeo </h1>

        <Link to="categoria">
            Cadastrar Categoria
        </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo;