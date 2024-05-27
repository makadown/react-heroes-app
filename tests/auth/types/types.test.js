import { types } from '../../../src/auth';

describe('types Test', () => {
    test('types should be defined', () => {
        expect(types).toBeDefined();
    });

    test('types should be an object', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });
    });
});
