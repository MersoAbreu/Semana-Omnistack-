import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Profile from './pages/Profile';
import Logon from './pages/Logon';
import NewIncident from './pages/NewIncident';
import Register from './pages/Register';

export default function Router(){
    return (

        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/incidents/new" component={NewIncident}></Route>
        </Switch>
        
        </BrowserRouter>
    )
}