import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { SinUpScreen } from '../components/login/SinUpScreen';

export const LogRoutes = () => {

    return (
        <>
            <div className="container mt-2">

                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route exact path="/sinup" component={ SinUpScreen } />
                    <Redirect to="/login" />
                </Switch>
                
            </div>
        </>
    )

}