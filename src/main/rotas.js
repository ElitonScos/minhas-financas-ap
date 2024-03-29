import React from 'react'

import Home from '../views/home'
import CadastroUsuario from '../views/cadastroUsuario'
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import Login from '../views/login'


function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro-usuarios" component={CadastroUsuario} />
                
            </Switch>
        </HashRouter>
    )
}

export default Rotas