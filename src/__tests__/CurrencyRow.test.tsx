import React from 'react'
import {render, screen} from '@testing-library/react'
import CurrencyRow from "../components/CurrencyRow";

describe('CurrencyRow', () => {
    it('should render correctly with all props', () => {
        const currency = {
            currency: 'USD',
            nameI18N: 'United States Dollar',
            exchangeRate: { middle: 1.2 },
            precision: 2,
        }
        const baseCurrency = 'EUR'
        render(<CurrencyRow currency={currency} baseCurrency={baseCurrency} />)

        expect(screen.getByAltText(/flag/i).getAttribute('src')).toBe(`${process.env.PUBLIC_URL}/flags/us.png`)
        expect(screen.getByText(currency.currency)).toBeInTheDocument()
        expect(screen.getByText(currency.nameI18N)).toBeInTheDocument()
        expect(screen.getByText(`${currency.exchangeRate.middle} ${baseCurrency}`)).toBeInTheDocument()
        expect(screen.getByTestId(/currency-row-wrapper/i)).toHaveStyle('border-bottom: 1px solid #F1F1F1')
        expect(screen.getByTestId(/currency-row-left-side/i)).toHaveStyle('align-items: center')
        expect(screen.getByTestId(/flag-wrapper/i)).toHaveStyle('width: 70px; height: 53px; padding-right: 8px')
    })

    it('should render correctly with no exchange rate', () => {
        const currency = {
            currency: 'USD',
            nameI18N: 'United States Dollar',
            precision: 2,
        }
        const baseCurrency = 'EUR'
        render(<CurrencyRow currency={currency} baseCurrency={baseCurrency} />)

        expect(screen.getByText(/value not provided/i)).toBeInTheDocument()
    })
})