import { useState, createContext, useContext } from "react";

const BudgetContext = createContext();



function BudgetProvider({ children }) {
    const [budgetMode, setBudgetMode] = useState(false);
    const providerValue = {
        budgetMode,
        setBudgetMode
    };
    return (

        <BudgetContext.Provider value={providerValue}>
            {children}
        </BudgetContext.Provider>

    );
}

function useBudget() {
    
    return useContext(BudgetContext);
}
export { BudgetContext, BudgetProvider, useBudget }