
/**
 * This is the test for SearchPage.jsx in src/heroes/pages
 * 1. Should render the search form
 * 2. Should render the heroes list
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';


const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate
}));

describe('SearchPage tests', () => {

    beforeEach(() => jest.clearAllMocks());

    test('Should render the search form', () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );
        expect(screen.getByText('Search a hero')).toBeTruthy();
        expect(container).toMatchSnapshot();
    });

    test('Should render Batman and the input with the queryString value', () => {
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman'] }>
                <SearchPage />
            </MemoryRouter>
        );
        
        // checking input with queryString value
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');
        // look for an image in the DOM to verify that there is at least 1 img with class "card-img"
        expect(screen.getAllByRole('img').length).toBeGreaterThan(0);

        const img = screen.getByRole('img');
        expect(img.src).toContain('assets/heroes/dc-batman.jpg');

        // check that HeroCard component is rendered
        const heroCard = screen.getByLabelText('hero-card');
        expect(heroCard).toBeTruthy();        
    });

    test('Should show an error if the hero is not found', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123'] }>
                <SearchPage />
            </MemoryRouter>
        );

        expect(screen.getByText('No hero batman123 found')).toBeTruthy();
    });

   test('Should call the useNavigate hook', () => {
        render(
            <MemoryRouter initialEntries={['/search'] }>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'batman' } });
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(mockedUsedNavigate).toHaveBeenCalledWith('?q=batman');
    });

});

