import React,{useState,useContext} from 'react'
import { GlobalContext } from './GlobalState'
const AddTransaction = () => {
    const [text,setText]=useState('');
    const [number,setnumber]=useState(0);
    const {AddTransaction}=useContext(GlobalContext);
    function onchangeHandler(event){
        setText(event.target.value);
    }
    function onChangeHandler(event){
        setnumber(event.target.value);
    }
    const submit=e=>{
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random() * 100000000),
            text,
            amount:+number
        }
        setText("");
        setnumber(" ");
        AddTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text}   onChange={onchangeHandler} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number"  value={number} onChange={onChangeHandler} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>

        </div>
    )
}
export default AddTransaction

