import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';


//Os componentes nada mais são do que funções
function CadastroCategoria(){
    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    //setNomeCategoria é uma função, a qual estamos a dar esse nome
    const [values, setvalues] = useState(valoresIniciais);

    //console: usada para ver/testar rapidamente o código
    //console.log('[values]',values);

    function setValue(chave, valor){
        //chave: nome, descricao, bla, ...
        //[chave] -> atribui dinamicamente o valor da chave, evita assim vários ifs
        setvalues({
            ...values,
            [chave]: valor,   //nome : 'valor'
        })
    }

    function handleChange(infosDoEvento){
        //Essa versão do código, apesar de mais elegante, sei lá porque não funcionou para mim
        //const {getAttribute, value} = infosDoEvento.target;
        //setValue(
        //    getAttribute('name'), 
        //    value
        //);
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        )
     }

    return (
      <PageDefault>
        
    <h1>Cadastro de Categoria: {values.nome}</h1>
    
        <form onSubmit={function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();
            //console.log('Tentativa de enviar o form');
            setCategorias([
                ...categorias,
                values
            ]);
            setvalues(valoresIniciais);
        }}>
        
        <FormField 
            label = "Nome da Categoria"
            type = "text"
            name = "nome"
            values = {values.nome}
            onChange = {handleChange}
        />
        {/*
        <div>
            <label>
                Nome da Categoria:
                <input
                    type="text"
                    value={values.nome}
                    name = "nome"
                    onChange={handleChange}
                    
                />
            </label>
        </div>
        */}
          <FormField 
            label = "Descricao"
            type = "textarea"
            rows = "6"
            cols = "1"
            name = "descricao"
            values = {values.descricao}
            onChange = {handleChange}
        />
        {/*<div>
        <label>
                Descrição
                <textarea
                    type="text"
                    value={values.descricao}
                    name = "descricao"
                    onChange={handleChange}
                />
            </label>
        </div>
        */}
        <FormField 
            label = "Cor"
            type = "color"
            name = "cor"
            values = {values.cor}
            onChange = {handleChange}
        />
        {/*<div>
        <label>
                Cor
                <input
                    type="color"
                    value={values.cor}
                    name = "cor"
                    onChange={handleChange}
                />
            </label>
        </div>
        */}

        <button>
          Cadastrar
        </button>
      </form>

        <ul>
            {categorias.map((categoria, indice) => {
                return (
                    <li key={`${categoria}${indice}`}> 
                        {categoria.nome}
                    </li>
                )
                })}
        </ul>

        <Link to="/">
            Ir para a home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;