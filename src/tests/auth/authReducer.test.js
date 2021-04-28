/* const state = {
    name: 'test',
    logged: true
} */

import { AuthReducer } from '../../auth/authReducer';
import { Types } from '../../types/types';

describe('Pruebas de authReducer', () => {

    const initialState = {
        name: 'test',
        logged: false
    };

    test('debe retornar el estado por defecto', () => {
        const noneState = { type: Types.none };
        const state = AuthReducer(initialState, noneState);
        expect(state).toEqual(initialState);
    });
    
    test('debe autenticar y colocar el name del usuario', () => {
        const autenticarAction = {
            type: Types.login,
            payload: initialState
        };
        
        const state = AuthReducer({},autenticarAction);
        expect(state.name).toEqual(initialState.name);
        expect(state.logged).toBeTruthy();
    });

    test('debe de borrar el name del usuario y logged en false', () => {
        const autenticarAction = {
            type: Types.login,
            payload: initialState
        };
        
        let state = AuthReducer({},autenticarAction);
        expect(state.name).toEqual(initialState.name);
        expect(state.logged).toBeTruthy();

        const logoutAction = {
            type: Types.logout
        };
        
        state = AuthReducer({},logoutAction);
        expect(state.logged).toBeFalsy();
    })
    
})
