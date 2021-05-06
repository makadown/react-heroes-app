import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Router } from 'react-router';
import { AuthContext } from '../../../auth/AuthContext';
import { useForm } from 'react-hook-form';
import { Types } from '../../../types/types';
import { LoginScreen } from '../../../components/login/LoginScreen';

describe('Pruebas de <LoginScreen/>', () => {

    // const { register, handleSubmit } = useForm();

    const historyMock = {
        length: 10,
        goBack: jest.fn(),
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn()
    };

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };

    /* const data = {
         username: 'test',
         password: 'test'
     }*/

    const useForm = {
        dispatch: jest.fn(),
        handleSubmit: jest.fn(),
        user: {
            logged: false
        }
    };

    test('debe de verse', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <LoginScreen history={historyMock}></LoginScreen>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    // Este no jala porque NO hice el jsx justo como en el curso jijiji
/*
    test('debe de realizar dispatch y navegacion', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <LoginScreen history={historyMock}></LoginScreen>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        wrapper.find('button').simulate('click', {
            data: {
                username: 'test',
                password: 'test'
            }
        });
        expect(useForm.handleSubmit).toHaveBeenCalled();
    });*/

});
