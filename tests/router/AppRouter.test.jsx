
/* Tests for AppRouter in src/router/AppRouter.jsx
    1. Should render LoginPage if not logged in
    2. Should render HeroesRoutes if logged in
 */

import { render, screen } from '@testing-library/react';
import { AppRouter } from '../../src/router/AppRouter';
import { AuthContext } from '../../src/auth';
import { MemoryRouter } from 'react-router-dom';

describe('AppRouter tests', () => {

    test('Should render LoginPage if not logged in', () => {
        const contextValue = { logged: false };
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getAllByText('Login').length).toBeGreaterThan(0);
    });


    test('Should render HeroesRoutes if logged in', () => {
        const contextValue = { logged: true, user: { name: 'test', id: 'ABC' } };
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getAllByText('Marvel').length).toBeGreaterThan(0);
    });

});


