import React from 'react';
import Header from "./components/Header";
import Search from "./components/Search";
import ListOfCurrencies from "./components/ListOfCurrencies";

function App() {
    return (
        <>
            <Header/>
            <Search/>
            <ListOfCurrencies/>
        </>
    );
}

export default App;
