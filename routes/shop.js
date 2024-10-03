import express from 'express'

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Gyökér oldal');
});

export default router;