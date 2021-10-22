import { types } from '../types/types';

const inicialState = {
    logged: false,
    email: '',
    localId: '',
    idToken: ''    
}

export const authReducer = (state = {inicialState}, action ) => {

    switch ( action.type ) {

        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }   

        default:
            return state;
            
    }

}