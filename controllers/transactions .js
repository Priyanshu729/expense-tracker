const Transaction=require('../models/Transactions')
//@desc get all transactions
//@route GET/api/v1/transactions
//@access public
exports.getTransactions=async(req,res,next)=>{
    try {
        const transactions=await Transaction.find();

        return res.status(200).json({
            success:true,
            count:transactions.length,
            data:transactions           
        });
    }
    catch (err) {
        return res.status(500).json({
            success:false,
            error:'Server Error'

        });

    }
}
//@desc add all transactions
//@route POST/api/v1/transactions
//@access public
exports.addTransactions=async (req,res,next)=>{
    try{
        const { text, amount }=req.body;

        const transaction= await Transaction.create(req.body);

        return res.status(201).json({
            success:true,
            data:transaction
        });
    }
    catch(err){
        if(err.name==='ValidationError'){
            const messages=Object.values(err.errors).map(val=>val.message);

            return res.status(400).json({
                success:false,
                error:messages
            });
            
        }
        else{
            return res.status(500).json({
                success:false,
                error:'Server Error'
    
            });
    
        }
    }
}
//@desc delete all transactions
//@route DELETE/api/v1/transactions/:id
//@access public
exports.deleteTransactions=async(req,res,next)=>{
    try{
        const transaction=await Transaction.findById(req.params.id);

        if(!transaction){
            res.status(404).json({
                success:false,
                error:'No Transaction Found'
            });
        }
        await transaction.deleteOne();

        return res.status(200).json({
            success:true,
            data:{}
        });
    }
    catch{
        return res.status(500).json({
            success:false,
            error:'Server Error'

        });
    }
}