import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Router } from 'react-router';
import { NavBar } from '../../../components/ui/NavBar';
import { AuthContext } from '../../../auth/AuthContext';
import { Types } from '../../../types/types';
import { HeroScreen } from '../../../components/heroes/HeroScreen';

describe('Pruebas en <HeroScreen/>', () => {

    const historyMock = {
        length: 10,
        goBack: jest.fn(),
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn()
    };

    test('debe de mostrar el componente redirect si no hay argumentos en el URL', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={historyMock}></HeroScreen>
            </MemoryRouter>
        );
        expect(wrapper.find('Redirect').exists()).toBeTruthy();
    });

    test('debe de mostrar un heroe si el parametro existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-iron']}>
                <Route path="/hero/:heroeId" component={HeroScreen}>
                </Route>
            </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBeTruthy();
    });

    test('debe regresar a la pantalla / con PUSH', () => {
        const localHistory = {
            length: 1,
            goBack: jest.fn(),
            push: jest.fn(),
            location: {},
            listen: jest.fn(),
            createHref: jest.fn(),
            replace: jest.fn()
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-iron']}>
                <Route
                    path="/hero/:heroeId"
                    component={() => <HeroScreen history={localHistory} />}>
                </Route>
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();        
        expect(localHistory.goBack).not.toHaveBeenCalled();
        expect(localHistory.push).toHaveBeenCalledWith('/');
    });

    test('debe regresar a la pantalla anterior usando goBack', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-iron']}>
                <Route
                    path="/hero/:heroeId"
                    component={() => <HeroScreen history={historyMock} />}>
                </Route>
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();
        expect(historyMock.push).not.toHaveBeenCalled();
        expect(historyMock.goBack).toHaveBeenCalled();
    });

    test('debe llamar el redirect si el heroe no existe', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-ironxxxxxxxxx']}>
                <Route
                    path="/hero/:heroeId"
                    component={() => <HeroScreen history={historyMock} />}>
                </Route>
            </MemoryRouter>
        );
        expect(wrapper.text()).toBe('');
    });

});
