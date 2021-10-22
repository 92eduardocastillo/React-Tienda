import React from 'react';

export default function Card ( {producto , Eliminar} ){    

    const { nombre, id } = producto

    return(

        <div className="card">
           <h1>{nombre}</h1>
           <h3>{id}</h3>           
           <button onClick={ ()=> Eliminar(id) } className="btn btn-secondary" >Eliminar</button>
        </div>

    )

}
