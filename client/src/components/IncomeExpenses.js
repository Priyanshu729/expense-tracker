import React, {useContext} from 'react'
import { GlobalContext } from './GlobalState'
import {numberWithCommas} from './utils/commas'
const IncomeExpenses = () => {
  const {transactions}=useContext(GlobalContext);
  const amount=transactions.map(balan => balan.amount);
  const positive=amount.filter(amount=>amount>0);
  const income=positive.reduce((sum,item)=>sum+=item,0);
  const negative=amount.filter(amount=>amount<0);
  const expense=negative.reduce((sum,item)=>sum+=item,0);
  
  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p className="money plus">${numberWithCommas(Math.abs(income))}</p>           
        </div>
        <div>
            <h4>Expense</h4>
            <p className="money minus">${numberWithCommas(Math.abs(expense))}</p>           
        </div>      
    </div>
  )
}

export default IncomeExpenses
