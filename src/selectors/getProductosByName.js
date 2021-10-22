//import { productos } from '../data/productos';

export const getProductosByName = (name, productos) => {


    if ( name === '' || !productos ) {
        console.log(name)
        console.log(productos)
        return productos;
    }
    console.log("filkter")
    return productos.filter( (prod) => prod.nombre.toLowerCase().includes(name.toLowerCase()))

}