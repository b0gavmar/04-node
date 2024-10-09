import express from 'express'
import path from 'path'

import __dirname from '../util/rootpath.js';

const router = express.Router();

router.get('/',(req,res)=>{
    res.status(404).render('shop.ejs');
});

export default router;