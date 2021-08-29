import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, useLocation } from "react-router-dom";
import UserForm from './components/NewAccount';
import Disqualified from './components/Disqualified';
import Landing from './components/Landing';

export class App extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/GetApproved">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <Redirect to="/Landing" />}
                    />
                    <Route path="/Landing">
                        <Landing />
                    </Route>
                    <Route path="/NewAccount">
                        <UserForm />
                    </Route>
                    <Route path="/Disqualified">
                        <Disqualified />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

function NoMatch() {
    let location = useLocation();

    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}