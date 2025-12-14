import { BudgetContext, BudgetProvider } from './contexts/BudgetContext';
import { createContext, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';
import Layout from './layouts/Layout';
import Dettaglio from './pages/Dettaglio';
function App() {
  
  return (
    <>
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/prodotti" element={<Prodotti />} />
            <Route path='/prodotti/:id' element={<Dettaglio />} />
          </Route>
          </Routes>
        </BrowserRouter>
      </BudgetProvider>


    </>
  )
}

export default App
