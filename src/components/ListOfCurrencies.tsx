import {Alert, CircularProgress} from '@mui/material';
import CurrencyRow from "./CurrencyRow";
import {CurrencyPropsType} from "../types/CurrencyType";
import useListOfCurrencies from "../hooks/useListOfCurrencies";

export default function ListOfCurrencies() {
    const {loading, error, listOfCurrencies} = useListOfCurrencies()

    if (loading) {
        return <CircularProgress/>
    }

    if (error) {
        return <Alert severity="error">This is an error alert — there was error, while getting data!</Alert>
    }

    const searchKeyWord = window.location.pathname.substring(1).toLowerCase()

    return <div data-testid={"list-of-currencies"}>
        {listOfCurrencies.fx
            .filter(searchKeyWordFilter(searchKeyWord))
            .map((currency: CurrencyPropsType, i: number) => <CurrencyRow key={i}
                                                                          data-testid={"currency-row-" + i}
                                                                          currency={currency}
                                                                          baseCurrency={listOfCurrencies.baseCurrency}/>)}
    </div>
}

function searchKeyWordFilter(searchKeyWord: string) {
    return function (currency: CurrencyPropsType) {
        return currency.currency.toLowerCase().includes(searchKeyWord) || currency.nameI18N?.toLowerCase().includes(searchKeyWord)
    }
}