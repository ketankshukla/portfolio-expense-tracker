import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

import './App.css'


const App = () => {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
      </div>
      <div className="container">
        <IncomeExpenses/>
      </div>
      <div className="container">
        <TransactionList/>
      </div>
      <div className="container">
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
