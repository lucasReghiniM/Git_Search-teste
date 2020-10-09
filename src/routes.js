import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main'
import Repositorios from './pages/Repositorios'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component = {Main}></Route>
                <Route exact path="/repositorio" component = {Repositorios}></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;