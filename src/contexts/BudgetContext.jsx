import { useState, createContext, useContext } from "react";

const BudgetContext = createContext();



function BudgetProvider({ children }) {
    const [budgetMode, setBudgetMode] = useState(false);
    return (

        <BudgetContext.Provider value={providerValue}>
            {children}
        </BudgetContext.Provider>

    );
}


export { BudgetContext, BudgetProvider }