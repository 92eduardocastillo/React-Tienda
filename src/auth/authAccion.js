import axios from 'axios';

import { types } from '../types/types';

const apiKey="AIzaSyDZQeK314I5UNLfvPqnxUV4RAk33oM2fdg"
const urlSingUp="https://identitytoolkit.googleapis.com/v1/accounts:signUp"
const urlSingIn="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword"

export const EntrarCorreo = async (requestCorreo,dispatch) => {

    const urlCorreo = `${urlSingIn}?key=${apiKey}`
    try {        
        const res = await axios.post(urlCorreo,requestCorreo)
        const {email, localId, idToken} = await res.data
        console.log("Logueado")
        dispatch({
            type: types.login,
            payload: {
                email,
                localId,
                idToken
            } 
        })
         
    }
    catch (error) {
        console.log("No se Logueo")
    } 
}

export const NuevoCorreo = async (requestCorreo) => {
    const urlCorreo = `${urlSingUp}?key=${apiKey}`
    const res = await axios.post(urlCorreo,requestCorreo)
    const data = await res.data
    return data
}


//const url = "https://tienda-1-72bd6-default-rtdb.firebaseio.com/productos.json"

// const requestCorreo = {
//   email : "92eduardocastillo@gmail.com",
//   password : "Asd12345",
//   returnSecureToken : true
// }

