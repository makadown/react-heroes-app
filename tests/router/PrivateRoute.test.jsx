import { render, screen } from '@testing-library/react';
import { PrivateRoute } from '../../src/router/PrivateRoute';
import { AuthContext } from '../../src/auth';
import { MemoryRouter } from 'react-router-dom';

describe('PrivateRoute tests', () => {
    test('should render children if logged in', () => {
        const contextValue = {
            logged: true,
            user: { name: 'test', id: 'ABC' }
        };
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Private route</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText('Private route')).toBeTruthy();
    });
    // Evaluate that localstorage has been called with 'lastPath'
    test('localstorage has been called with "lastPath"', () => {
        Storage.prototype.setItem = jest.fn();
        const contextValue = {
            logged: true,
            user: { name: 'test', id: 'ABC' }
        };
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Private route</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(Storage.prototype.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });

});