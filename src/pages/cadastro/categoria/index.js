// import React, { useState, useEffect } from 'react';
import React from 'react';
// import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

// Os componentes nada mais são do que funções
function CadastroCategoria() {
  // const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    // id: 0,
    titulo: '',
    description: '',
    cor: '',
    // link_extra: '',
  };

  // console: usada para ver/testar rapidamente o código
  // console.log('[values]',values);

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  function handleSubmit(e) {
    e.preventDefault();

    categoriasRepository
      .create({
        titulo: values.titulo,
        descricao: values.description,
        cor: values.cor,
      })
      .then(() => {
        alert('Categoria cadastrada');
        clearForm();
      });
  }

  /* versão inicial em que não havia uma criação na BD
  // ============
  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://qcflix.herokuapp.com/categorias';

    fetch(URL_TOP)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias([
            ...resposta,
          ]);
          return;
        }
        throw new Error('Não foi possível obter os dados');
      });
  }, []);

*/

  return (
    <PageDefault>
      {/*
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>
      */}
      <form onSubmit={handleSubmit}>

        {/* versão inicial
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        // console.log('Tentativa de enviar o form');
        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm();
      }}
      >
    */}

        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}

        />

        <FormField
          label="Descricao"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}

        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}

        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {/*
      {categorias.length === 0 && (
      <div>
        Loading ...
      </div>
      )}
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>
        */}

      {/* Isto está redundante pois o próprio logo no PageDefault leva para a página inicial
      <Link to="/">
        Ir para a home
      </Link>
    */}

    </PageDefault>
  );
}

export default CadastroCategoria;
