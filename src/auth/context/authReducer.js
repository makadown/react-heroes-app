import { types } from '../types/types';

/**
 * Reducer de autenticación utilizado por AuthProvider.jsx.
 * NOTA: JAMAS llamar funciones externas fuera del reducer.
 *          ni siquiera llamar el console.log.
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {

        case types.login:
            return  {
                ...state,
                logged: true,
                user: action.payload
            };

        case types.logout:
            return {
                // ...state,
                logged: false
            };

        default:
            return state;
    }
}