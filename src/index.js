import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page404 from './pages/page404';

import Home from './pages/Home';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

//const Pagina404 = () => (<div> Página 404</div>)

ReactDOM.render(
  // versão original:
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
  //--------------------
  //Versão usando o caonceito SPA (Single Page Application)
  <BrowserRouter>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  
  document.getElementById('root')
);

//[usado para fazer testes rápidos:
//  <Route component={() => (<div> Página 404</div>)} />
