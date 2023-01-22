import axios from 'axios';
import getListOfCurrencies from "../api/getListOfCurrencies";

jest.mock('axios');

describe('getListOfCurrencies', () => {
    it('should set loading to true and make a GET request', async () => {
        const setIsLoading = jest.fn();
        const setListOfCurrencies = jest.fn();
        const setError = jest.fn();
        const data = {fx: [{currency: "USD", rate: 1.2}], baseCurrency: "EUR"};
        (axios.get as jest.Mock).mockResolvedValue({data});
        await getListOfCurrencies(setIsLoading, setListOfCurrencies, setError);
        await expect(axios.get).toHaveBeenCalledWith('https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343');
        expect(setListOfCurrencies).toHaveBeenCalledWith(data);
        expect(setIsLoading).toHaveBeenCalledWith(false);
    });

    it('should set error to true and loading to false on failure', async () => {
        const setIsLoading = jest.fn();
        const setListOfCurrencies = jest.fn();
        const setError = jest.fn();
        // @ts-ignore
        (axios.get as jest.Mock).mockRejectedValueOnce();
        await getListOfCurrencies(setIsLoading, setListOfCurrencies, setError);
        await expect(axios.get).toHaveBeenCalledWith('https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343');
        expect(setError).toHaveBeenCalledWith(true);
        expect(setIsLoading).toHaveBeenCalledWith(false);
    });
});