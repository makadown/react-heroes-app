import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router';
import { NavBar } from '../../../components/ui/NavBar';
import { AuthContext } from '../../../auth/AuthContext';
import { Types } from '../../../types/types';
import { HeroScreen } from '../../../components/heroes/HeroScreen';

describe('Pruebas en <HeroScreen/>', () => {

    const historyMock = {
        length: 10,
        goback: jest.fn(),
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn()
    };

    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen history={historyMock}></HeroScreen>
        </MemoryRouter>
    );

    test('debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
        expect(wrapper.find('Redirect').exists()).toBeTruthy();
    });
});
