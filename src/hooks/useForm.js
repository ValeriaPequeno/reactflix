import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setvalues] = useState(valoresIniciais);

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
    //-------
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function clearForm() {
    setvalues(valoresIniciais);
  }

  return {
    handleChange,
    values,
    clearForm,
  };
}

export default useForm;
