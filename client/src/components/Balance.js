import React, {useContext} from 'react'
import { GlobalContext } from './GlobalState'
import {numberWithCommas} from './utils/commas'
const Balance = () => {
  const {transactions}=useContext(GlobalContext);
  const amount=transactions.map(balances => balances.amount);
  console.log(amount);
  const total=amount.reduce((sum,item)=>sum+=item,0).toFixed(2);

  return (
    <div>
        <h4>Your Balance</h4>
        <h2>${numberWithCommas(total)}</h2>
      
    </div>
  )
}

export default Balance

