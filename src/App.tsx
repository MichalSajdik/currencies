import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import ListOfCurrenciesPage from "./page/ListOfCurrenciesPage";

function App() {
    const bondValue = 2; // Euros
    const assignTime = 3; // Days
    const freeBondTime = 7 // Days

    const bondNumber = 1
    // 0. day
    // 1 bond not assigned
    // 3. day 1 bond assigned
    // 10. day 1 bond assigned, 1 bond not assigned
    // 13. day 2 bond assigned
    // 17. day 2 bond assigned, 1 bond not assigned
    // 20. day 3 bond assigned, 1 bond not assigned

    const bonds = [2, 3, 1, 1, 1, 0, 0, 0, 0] //,    2, 3, 1, 1, 1, 0, 2
    const numberOfDaysInYear = 365;
    let valueOfBonds = 0;
    while (numberOfDaysInYear !== (bonds.length + 1)) {
        let i = 0;
        let newBonds = 0;
        while (true) {
            const goBackIndex = -10 - (i * 7);
            if (Math.abs(goBackIndex) > bonds.length + 1) {
                break;
            }
            newBonds += bonds[bonds.length + 1 + goBackIndex]
            i++;
        }
        bonds.push(newBonds)
        console.log(bonds)
        valueOfBonds = bonds.reduce((prev: number, next: number) => prev + next, 0) * bondValue;
        // 1) answer
        // if (valueOfBonds > 272000000000){
        //     console.log("It will take " + bonds.length + " days")
        //     break
        // }
    }
    // 2) answer
    console.log(valueOfBonds);


    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<ListOfCurrenciesPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
