import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import Search from "../components/Search";
import {MemoryRouter, Route, Routes, useNavigate} from 'react-router-dom';

jest.mock('react-router-dom', () => {
    return {
        ...jest.requireActual('react-router-dom'),
        useNavigate: jest.fn(),
    }
})


describe('Search', () => {
    it('should render the correct empty search value', () => {
        render(
            <MemoryRouter initialEntries={['']}>
                <Routes>
                    <Route path="*" element={<Search/>}/>
                </Routes>
            </MemoryRouter>);

        const input = screen.getByTestId('search-input');
        expect(input).toHaveAttribute('value', window.location.pathname.substring(1))
        expect(input).toHaveStyle('background-color: white')
        expect(screen.getByText(/search/i)).toBeInTheDocument()
        expect(screen.getByTestId(/search-row-wrapper/i)).toHaveStyle('background-color: grey')
        expect(screen.getByTestId(/search-styled-div/i)).toHaveStyle('padding: 8px 8px 8px 16px')
    });

    it('should update the search value on change', () => {
        render(
            <MemoryRouter initialEntries={['/test-value']}>
                <Search/>
            </MemoryRouter>);
        const input = screen.getByTestId('search-input');
        fireEvent.change(input, {target: {value: 'new-value'}});
        // @ts-ignore
        expect(input.value).toBe('new-value');
    });

    it('should navigate to correct location on enter', () => {
        const navigate = jest.fn()
        // @ts-ignore
        useNavigate.mockImplementation(() => navigate)
        render(<Search />)
        const input = screen.getByTestId('search-input')
        fireEvent.change(input, { target: { value: 'new value' } })
        fireEvent.keyDown(input, { key: 'Enter', code: 13 })
        expect(navigate).toHaveBeenCalledWith(`/new value`)
        expect(navigate).toHaveBeenCalledWith(0)
        expect(navigate).toHaveBeenCalledTimes(2)
    })

    it('should not navigate on non-enter key press', () => {
        const navigate = jest.fn()
        // @ts-ignore
        useNavigate.mockImplementation(() => navigate)
        render(<Search />)
        const input = screen.getByTestId('search-input')
        fireEvent.change(input, { target: { value: 'new value' } })
        fireEvent.keyDown(input, { key: 'Tab', code: 9 })
        expect(navigate).not.toHaveBeenCalled()
    })
});