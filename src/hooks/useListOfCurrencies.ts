import {useEffect, useState} from "react";
import getListOfCurrencies from "../api/getListOfCurrencies";
import {ListOfCurrenciesDataType} from "../types/CurrencyType";

export default function useListOfCurrencies() {
    const [loading, setIsLoading] = useState(true)
    const [error, setError] = useState(false);
    const [listOfCurrencies, setListOfCurrencies] = useState<ListOfCurrenciesDataType>({
        baseCurrency: "",
        comparisonDate: new Date(0),
        fx: [],
        institute: 0,
        lastUpdated: new Date(0)
    })

    useEffect(() => {
        getListOfCurrencies(setIsLoading, setListOfCurrencies, setError)
    }, [])

    return {loading, error, listOfCurrencies}
}