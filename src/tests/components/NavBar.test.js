import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { NavBar } from '../../components/ui/NavBar';
import { MemoryRouter, Router } from 'react-router';
import { Types } from '../../types/types';

describe('Pruebas de <NavBar/>', () => {

    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn()
    };

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'test'
        }
    };
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <NavBar />
                </Router>
            </MemoryRouter>

        </AuthContext.Provider>
    );

    afterEach(()=>{
        jest.clearAllMocks();
    });

    test('Debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toContain('test');
    });

    test('debe de llama el logout y usar history', () => {

        wrapper.find('button').at(1).simulate('click');
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: Types.logout
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    });


});
