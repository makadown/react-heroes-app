import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { mount } from 'enzyme';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Pruebas con <SearchScreen/>', () => {

    test('debe mostrarse correctamente con valores por defecto ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={SearchScreen}>

                </Route>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
    });

    test('debe mostrar a Batman y el input con el valor del queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={SearchScreen}>

                </Route>
            </MemoryRouter>
        );
        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe mostrar error si no se encuentra el heroe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman_popo_']}>
                <Route path="/search" component={SearchScreen}>

                </Route>
            </MemoryRouter>
        ); 
        expect(wrapper.find('.alert-info').text().trim()).toContain('No results found');
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar el push del history al enviar texto de formulario para buscar', () => {
        const historyMock = {
            push: jest.fn(),
            location: {},
            listen: jest.fn(),
            createHref: jest.fn(),
            replace: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route 
                    path="/search" 
                    component={ () => <SearchScreen history={historyMock}/> }>

                </Route>
            </MemoryRouter>
        ); 
        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        });
        wrapper.find('form').prop('onSubmit')({
            preventDefault() {}
        });

        expect(historyMock.push).toHaveBeenCalledWith(`?q=batman`);
    });
    

});
