import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

// Os componentes nada mais são do que funções
function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#F5DE03',
  };

  // setNomeCategoria é uma função, a qual estamos a dar esse nome
  const [values, setvalues] = useState(valoresIniciais);

  // console: usada para ver/testar rapidamente o código
  // console.log('[values]',values);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, ...
    // [chave] -> atribui dinamicamente o valor da chave, evita assim vários ifs
    setvalues({
      ...values,
      [chave]: valor, // nome : 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    // Essa versão do código, apesar de mais elegante, sei lá porque não funcionou para mim
    // const {getAttribute, value} = infosDoEvento.target;
    // setValue(
    //    getAttribute('name'),
    //    value
    // );
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }
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
  return (
    <PageDefault>

      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        // console.log('Tentativa de enviar o form');
        setCategorias([
          ...categorias,
          values,
        ]);
        setvalues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          values={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descricao"
          type="textarea"
          name="descricao"
          values={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          values={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

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

      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
