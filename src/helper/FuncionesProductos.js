import axios from 'axios';

export const ObtenerProductos = async (idToken) => {

    const urlTienda ="https://tienda-1-72bd6-default-rtdb.firebaseio.com/tienda"
    const urlCorreo = `${urlTienda}/productos.json?auth=${idToken}`

    try {
        const res = await axios(urlCorreo)
        const data = await res.data
        const array = Object.entries(data || {})
        console.log("array\n" + array)        

        const resutado = array.map ( item => {
                item[1].id=item[0]
                return item[1]            
        } )

        return resutado
    }  
    catch (e){
        throw(e)
    }
             
}