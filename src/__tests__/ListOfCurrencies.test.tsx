// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';
import useListOfCurrencies from '../hooks/useListOfCurrencies';
import ListOfCurrencies from "../components/ListOfCurrencies";

jest.mock('../hooks/useListOfCurrencies', () => jest.fn());

const mockUseListOfCurrencies = useListOfCurrencies as jest.MockedFunction<typeof useListOfCurrencies>

describe('ListOfCurrencies', () => {
    beforeEach(() => {
        mockUseListOfCurrencies.mockClear();

        global.window = Object.create(window);
        const url = "http://dummy.com";
        Object.defineProperty(window, 'location', {
            value: {
                href: url
            }
        });
        expect(window.location.href).toEqual(url);
    });

    it('should render a CircularProgress component when loading', () => {
        mockUseListOfCurrencies.mockReturnValue({error: false, listOfCurrencies: [], loading: true });


        render(<ListOfCurrencies />);
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('should render an Alert component with error message when there is an error', () => {
        mockUseListOfCurrencies.mockReturnValue({listOfCurrencies: [], loading: false, error: true });
        render(<ListOfCurrencies />);
        expect(screen.getByText('This is an error alert — there was error, while getting data!')).toBeInTheDocument();
    });

    it('should render CurrencyRow components when there is no error and not loading', () => {
        mockUseListOfCurrencies.mockReturnValue({
            error: false, loading: false,
            listOfCurrencies: {
                fx: [
                    { currency: 'USD', nameI18N: 'United States dollar', precision: 2 },
                    { currency: 'EUR', nameI18N: 'Euro', precision: 2 },
                ],
                baseCurrency: 'USD',
            }
        });

        window.location.pathname = '/eur';
        render(<ListOfCurrencies />);
        expect(screen.getAllByTestId('list-of-currencies')).toHaveLength(1);
        expect(screen.getByText('Euro')).toBeInTheDocument();
    });
});