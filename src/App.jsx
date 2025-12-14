import { BudgetContext, BudgetProvider } from './contexts/BudgetContext';
import { createContext, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const providerValue = {
    //
  }
  return (
    <>
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path='' element='' />
              <Route path='' element='' />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetProvider>


    </>
  )
}

export default App
