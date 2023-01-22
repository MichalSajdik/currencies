import axios from "axios";
import {ListOfCurrenciesDataType} from "../types/CurrencyType";
import {Dispatch, SetStateAction} from "react";

type SetIsLoadingType = Dispatch<SetStateAction<boolean>>
type SetListOfCurrenciesType = Dispatch<SetStateAction<ListOfCurrenciesDataType>>
type SetErrorType = Dispatch<SetStateAction<boolean>>

export default function getListOfCurrencies(setIsLoading: SetIsLoadingType, setListOfCurrencies: SetListOfCurrenciesType, setError: SetErrorType) {
    axios.get('https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343')
        .then((response: { data: ListOfCurrenciesDataType }) => {
            setListOfCurrencies(response.data)
            setIsLoading(false)
        }).catch(() => {
        setError(true)
        setIsLoading(false)
    });
}