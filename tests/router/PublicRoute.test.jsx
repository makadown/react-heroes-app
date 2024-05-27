/*
  Tests for public route in src/router/PublicRoute.jsx
  1. Should render children if not logged in
  2. Should navigate to /marvel if logged in
*/
 
import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('PublicRoute tests', () => {

    test('should render children if not logged in', () => {
        const contextValue = { logged: false };
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Public route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Public route')).toBeTruthy();
    });

    test('should navigate to /marvel if logged in', () => {
        const contextValue = { logged: true, user: { name: 'test', id: 'ABC' } };
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="marvel" element={<h1>Marvel route</h1>} />
                        <Route path="login" 
                          element={<PublicRoute>
                                         <h1>Public route</h1>
                                   </PublicRoute>}
                        />
                    </Routes>
                   
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Marvel route')).toBeTruthy();
    });
});