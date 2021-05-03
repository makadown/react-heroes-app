import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { DashBoardRoutes } from '../../routers/DashBoardRoutes';
import { MemoryRouter } from 'react-router';

describe('Pruebas de DashboardRoutes', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'test'
        }
    };

    test('debe de mostrarse correctamente ', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashBoardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toContain('test');
    });

});
