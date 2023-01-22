import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import ListOfCurrenciesPage from "./page/ListOfCurrenciesPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<ListOfCurrenciesPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
