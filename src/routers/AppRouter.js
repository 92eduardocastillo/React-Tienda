import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardRoutes } from './DashboardRoutes';
import { LogRoutes } from './LogRoutes';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
               <Switch> 

                    <PublicRoute
                    exact 
                    path="/login" 
                    component={ LogRoutes }
                    isAuthenticated={ user.logged } 
                    />

                    <PrivateRoute
                    path="/"
                    component={ DashboardRoutes } 
                    isAuthenticated={ user.logged }
                    />

                </Switch>
                
            </div>            
        </Router>
    )
}
