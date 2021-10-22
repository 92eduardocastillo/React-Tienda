import React, {useMemo,useEffect, useState, useContext} from 'react';
import axios from 'axios';

import { useForm } from '../../hooks/useForm';

import { getProductos } from '../../selectors/getProductos';
import { getProductosByName } from '../../selectors/getProductosByName';

import Card from '../Card/Card'
import { ObtenerProductos } from '../../helper/FuncionesProductos';

const urlTienda ="https://tienda-1-72bd6-default-rtdb.firebaseio.com/tienda"

export default function Productos () {

    const {idToken} = JSON.parse(localStorage.getItem('user'))
  
    const [productos,  setProducto] = useState([]); 

    const [ formValues, handleInputChange ] = useForm({
        searchText: ''
    });
    const { searchText } = formValues;

    
    //Funciones
    
    const Obtener = () => {
    ObtenerProductos(idToken)
    .then ( productos => setProducto(productos) )
    
    // setProducto(getProductos())
    }    

    const Eliminar = async (id) => {
     await axios.delete(`${urlTienda}/productos/${id}.json?auth=${idToken}`)
     .then( Obtener() )
     .catch((error)=> console.log("mal"))
    } 

    

    useEffect( ()=> Obtener() , [])

    const lista = useMemo(() => getProductosByName(searchText, productos), [searchText,productos])    
    
    const handleSearch = (e) => {
        e.preventDefault();
    }

    //Codigo HTML
    return(
        <div>
            <h1>Productos</h1>
            
            <form onSubmit={ handleSearch }>

                <input 
                type="text"
                className="form-control"
                name="searchText"
                value={searchText}
                onChange={handleInputChange}
                />

                <button
                className="btn btn-primary"
                >Buscar
                </button>

            </form>
            
            <hr />

            <div className="card-columns animate__animated animate__fadeIn">
                {
                lista
                ? lista.map ( ( producto , index ) => <Card key={index} producto={producto}  Eliminar={Eliminar} /> )
                : <div>NO hay Productos</div>
                }
            </div>
        </div>
        ) //Fin de Codigo HTML

} // Fin de la Funcion Componente
