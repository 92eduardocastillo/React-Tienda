//import { productos } from "../data/productos";

export const getProductosById = ( id ) => {

    return productos.find( prod => prod.id === id )

}