import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import Search from "../components/Search";
import {MemoryRouter, Route, Routes} from 'react-router-dom';

describe('Search', () => {
    it('should render the correct empty search value', () => {
        render(
            <MemoryRouter initialEntries={['']}>
                <Routes>
                    <Route path="*" element={<Search/>}/>
                </Routes>
            </MemoryRouter>);

        const input = screen.getByTestId('search-input');
        // @ts-ignore
        expect(input.value).toBe('');
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
});