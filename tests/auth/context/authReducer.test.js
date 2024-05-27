
/* Test for authReducer in src/auth/context: 
   1. Should return default state
   2. Login should call authReducer and return logged: true
   3. Logout should call authReducer and return logged: false  */

import { authReducer, types } from '../../../src/auth';

describe('Pruebas authReducer', () => {
    test('should return default state', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });
    test('should login and return logged: true', () => {
        const state = authReducer({ logged: false }, {
            type: types.login,
            payload: { name: 'test' }
        });
        expect(state).toEqual({ logged: true, user: { name: 'test' } });
    });
    test('should logout and return logged: false', () => {
        const state = authReducer({ logged: true, user: { name: 'test' } }, {
            type: types.logout
        });
        expect(state).toEqual({ logged: false });
    });
});