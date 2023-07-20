import React, {createContext,useReducer} from 'react'
import AppReducer from './AppReducer';
import axios from 'axios'
const initialstate={
    transactions:[],
    error:null,
    loading:true
}
export const GlobalContext=createContext(initialstate);
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialstate);
    
    //Actions
    async function getTransactions(){
        try{
            const res=await axios.get('/api/v1/transactions');

            dispatch({
                type:'GET_TRANSACTIONS',
                payload:res.data.data
            });
        }
        catch(err){
            dispatch({
                type:'TRANSACTION_ERROR',
                payload:err.response.data.error
            });

        }
    }


    async function deleteTransaction(id){
        try{

            await axios.delete(`/api/v1/transactions/${id}`)
            dispatch({
            type:'delete',
            payload:id
        });
        }
        catch(err){
            dispatch({
                type:'TRANSACTION_ERROR',
                payload:err.response.data.error
            });

        }

    }
    async function AddTransaction(transaction){
        const config={
            'headers':{
                'Content-Type':'application/json'
            }
        }
        try{
            const res=await axios.post('/api/v1/transactions',transaction,config);

            dispatch({
                type:'add',
                payload:res.data.data
            });
        }
        catch(err){
            dispatch({
                type:'TRANSACTION_ERROR',
                payload:err.response.data.error
            });

        }
        
    }
    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        error:state.error,
        loading:state.loading,
        getTransactions,
        deleteTransaction,
        AddTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}
