import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en <AppRouter/>', () => {

    test('Debe de mostrar login si no está autenticado ', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: false
            }
        };
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper.find('.navbar').exists()).toBeFalsy();
    });

    test('Debe de mostrar el componente de marvel si está autenticado', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Mayito'
            }
        };
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper.find('.navbar').exists()).toBeTruthy();
    });

});
