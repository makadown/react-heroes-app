/*
  Unit test for NavBar in src/ui/components/NavBar.jsx
  1. Should show the logged user name in the "Hi { user?.name }!" section.
  2. When we click on Logout, mocking the useNavigate hook make sure that it should navigate to /login using
        navigate('/login', {
            replace: true
        });
*/
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../../src/auth';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { Navbar } from '../../../src/ui/components/NavBar';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('NavBar tests', () => {
    
    const contextValue = {
        logged: true,
        user: { name: 'test', id: 'ABC' },
        logout: jest.fn()
    };

    beforeEach(() => jest.clearAllMocks());

    test('Should show the logged user name in the "Hi { user?.name }!" section.', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );        
        expect(screen.getByText('Hi test!')).toBeTruthy();
    });

    test('When we click on Logout, mocking the useNavigate hook make sure that it should navigate to /login', () => {
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        screen.getByText('Logout').click();
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUsedNavigate).toHaveBeenCalledWith('/login', {
            replace: true
        });
    });
});


