import React from "react";
import { Route, Switch } from "react-router-dom";

import CadastroFuncionarios from "../pages/CadastroFuncionarios.tsx";
import ListagemFuncionarios from "../pages/ListagemFuncionarios/index";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ListagemFuncionarios} />
    <Route path="/cadastro" component={CadastroFuncionarios} />
  </Switch>
);

export default Routes;
