import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router';

describe('Pruebas en <PrivateRoute/>', () => {
    const props = {
        location: {
            pathname: '/marvel'
        }
    };

    test('debe de mostrar el componente si está autenticado y guardar localstorage', () => {
        // OJO: En estos high order components como private route, se debe usar
        // mount en lugar de shallow
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>);
        expect(wrapper.find('span').exists()).toBeTruthy();
    })

});
