import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'

import './App.css'
import IncomeExpenses from './components/IncomeExpenses';

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
    </div>
  );
}

export default App;
