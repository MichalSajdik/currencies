import {useEffect, useState} from "react";
import getListOfCurrencies from "../api/getListOfCurrencies";

export default function useListOfCurrencies() {
    const [loading, setIsLoading] = useState(true)
    const [error, setError] = useState(false);
    const [listOfCurrencies, setListOfCurrencies] = useState<any>([])

    useEffect(() => {
        getListOfCurrencies(setIsLoading, setListOfCurrencies, setError)
    }, [])

    return {loading, error, listOfCurrencies}
}