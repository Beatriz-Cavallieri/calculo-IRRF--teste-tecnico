import React from "react";
import { Route, Switch } from "react-router-dom";

import CadastroFuncionarios from "../pages/CadastroFuncionarios.tsx";
import ListagemFuncionarios from "../pages/ListagemFuncionarios/index";
import PesquisaFuncionarios from "../pages/PesquisaFuncionarios";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ListagemFuncionarios} />
    <Route path="/cadastro" component={CadastroFuncionarios} />
    <Route path="/pesquisa" component={PesquisaFuncionarios} />
  </Switch>
);

export default Routes;
