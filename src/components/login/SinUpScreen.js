import React, { useContext} from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

import { EntrarCorreo, NuevoCorreo } from '../../auth/authAccion';
import { useForm } from '../../hooks/useForm';

//Comienzo del La funcion Componente LoginScreen
export const SinUpScreen = ({ history }) => { 

  const { dispatch } = useContext( AuthContext ); 

  const [ formValues, handleInputChange ] = useForm({
    email : "",
    password : "",
    returnSecureToken : true

});

   const {email, password} = formValues

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = await EntrarCorreo(formValues) 
         console.log(data)
        
        if (data.registered === true){
              dispatch(
                  {
                      type: types.login,
                      payload: {
                          name: data.email
                      } 
                  }
              )
             }

    }  // Fin de handleLogin
    

    return (

        <div className="container col-xl-10 col-xxl-8 px-4 py-1">
        <div className="row align-items-center g-lg-5 py-1">
          <div className="col-md-10 mx-auto col-lg-5">
              <div className="d-flex justify-content-between">
              <h1>Welcome to Store</h1>
              <button className= "btn btn-link " >Registrarse</button>
              </div>
            <form onSubmit={handleLogin} className="p-4 p-md-5 border rounded-3 bg-light" >
    
              <div className="form-floating mb-3">
                <input type="email" 
                className="form-control" 
                id="floatingInput" placeholder="name@example.com" 
                name="email"
                value={email}
                onChange={handleInputChange}              
                />
                <label for="floatingInput">Email address</label>
              </div>
    
              <div className="form-floating mb-3">
                <input type="password" 
                className="form-control" 
                id="floatingPassword" 
                placeholder="Password" 
                name="password"
                value={password}
                onChange={handleInputChange}
                />
                <label for="floatingPassword" >Password</label>
              </div>
    
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              
              <button className="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
              <hr className="my-4" />
              {/* <button className="w-100 btn btn-lg btn-primary" onClick="NuevoCorreo" >Log up</button>
              <hr className="my-4" /> */}
              <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
            </form>

          </div>
          
        </div>
      </div>
    )
}
