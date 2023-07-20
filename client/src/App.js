import './App.css';
import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './components/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='balance'>
        <Balance />
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );

}
export default App;
