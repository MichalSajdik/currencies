import {Alert, CircularProgress} from '@mui/material';
import styled from "styled-components";
import CurrencyRow from "./CurrencyRow";
import {CurrencyPropsType} from "../types/CurrencyType";
import useListOfCurrencies from "../hooks/useListOfCurrencies";

const ListOfCurrenciesWrapper = styled.div`
`

export default function ListOfCurrencies() {
    const {loading, error, listOfCurrencies} = useListOfCurrencies()

    if (loading) {
        return <CircularProgress/>
    }

    if (error) {
        return <Alert severity="error">This is an error alert — there was error, while getting data!</Alert>
    }

    return <ListOfCurrenciesWrapper>
        {listOfCurrencies.fx.map((currency: CurrencyPropsType, i: number) => <CurrencyRow key={i}
                                                                                            currency={currency} baseCurrency={listOfCurrencies.baseCurrency}/>)}
    </ListOfCurrenciesWrapper>
}