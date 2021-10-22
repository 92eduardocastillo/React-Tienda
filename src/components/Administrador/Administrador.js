import axios from 'axios';
import React from 'react';
import { useForm } from '../../hooks/useForm';

function Administrador ( {history} ) {

    const {idToken,localId} = JSON.parse(localStorage.getItem('user'))
    

    const url = `https://tienda-1-72bd6-default-rtdb.firebaseio.com/tienda/productos.json?auth=${idToken}`
    
    const [ formValues, handleInputChange ] = useForm({
        nombre: ''
    });

    const {nombre} = formValues;

    const Agregar = (e) => {
        e.preventDefault();

         axios.post(url,formValues)
         .then(r=> console.log(r))
         .catch(e=>console.log(e))
    }

   return (
       <div>
           <h1>Administrador</h1>
           <hr/>

           <form onSubmit={ Agregar }>
           <input 
        type="text"
        className="form-control"
        name="nombre"
        value={nombre}
        onChange={handleInputChange}
        />

        <button
        className="btn btn-primary"
        >Agregar
        </button>
          </form> 
           
       </div>
   )
        

}

export default Administrador;
