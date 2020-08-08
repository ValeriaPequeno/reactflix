import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo2.png';
import { LogoImage, MenuWrapper } from './style';
// import './Menu.css';
import Button from '../Button';

// import ButtonLink from '../Menu/components/ButtonLink';

// será um componente, todo componente começa com Maiúsculo

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage src={Logo} alt="Logo da minha página" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
