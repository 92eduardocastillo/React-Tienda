import React, {useContext} from 'react'
import { AuthContext } from '../../auth/AuthContext';

import { Link, NavLink, useHistory } from 'react-router-dom';
import { types } from '../../types/types';


export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext)
    const history = useHistory();

    const handleLogout = () => {

        history.replace('/login');

        dispatch(
            {
              type: types.logout
            }
        ) 

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">        

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    
                   <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/productos"
                    >Productos
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/administrador"
                    >Administrador
                    </NavLink>

                    <span className="nav-item nav-link text-info"> 
                        {(user.email) ? (user.email) : ("")}
                    </span>

                    <button 
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}                       
                    > 
                        Logout
                    </button>
                    
                </div>
            </div>

            <div className="navbar-collapse">
                <div className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info"> 
                        {(user.email) ? (user.email) : ("")}
                    </span>

                    <button 
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}                       
                    > 
                        Logout
                    </button>
                    
                </div>
            </div>
        
        </nav>
    )

}