import axios from "axios";

export default function getListOfCurrencies(setIsLoading: any, setListOfCurrencies: any, setError: any) {
    axios.get('https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343')
        .then((response: { data: any; }) => {
            setListOfCurrencies(response.data)
            setIsLoading(false)
        }).catch((error: any) => {
        setError(true)
        setIsLoading(false)
        console.log(error)
    });
}