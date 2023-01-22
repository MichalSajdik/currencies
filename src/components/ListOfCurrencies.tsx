import useFetch from 'use-http'
import {CircularProgress} from '@mui/material';

export default function ListOfCurrencies() {
    const options = {method: "GET"}
    const {
        loading,
        error,
        data = []
    } = useFetch('https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343', options, [])

    if (loading) {
        return <CircularProgress/>
    }

    console.log(data)

    return <div></div>
}