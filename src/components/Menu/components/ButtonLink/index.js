import React from 'react';

//será um componente, todo componente começa com Maiúsculo

function ButtonLink(props) {
    //o mesmo formato de botão, mas diferentes textos
    //props => { className: "o que alguém passar", href: "o link passado"}
    console.log(props);
    return(
        <a className={props.className} href={props.href}>
            Novo vídeo
        </a>
    );
}

export default ButtonLink;