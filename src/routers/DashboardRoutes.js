import React from 'react';
import { Navbar } from '../components/ui/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom';
import Productos from '../components/Productos/Productos';
import Administrador from '../components/Administrador/Administrador';


export const DashboardRoutes = () => {


    return (
        <>
            <Navbar />

            <div className="container mt-2">
            
            <Switch>
              <Route exact path="/productos" component={ Productos } />
              <Route exact path="/administrador" component={ Administrador } />
              <Redirect to="/productos" />
            </Switch>

            </div>


        </>
    )
}
