import styled from "styled-components";
//Se quiser usar o componente já com o link associado:
//import {Link} from 'react-router-dom';
//const Button = styled.(Link)`

const Button = styled.button`
 
  border-radius: 5px;
  border : 1px solid var(--white);
  color: var(--white);
  font-size : 16px;
  font-weight: bold;
  padding: 16px 24px;
  text-decoration: none;
  transition: opacity .3s
  &:hover,
  &:focus{
      opacity: .5
  }

  @media(max-width:800px){
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--primary);
      color: var(--white);
      outline: 0;
      text-align: center;
      border-radius: 0;
      border: 0;
  }
`;
//& está no lugar do botão

export default Button
