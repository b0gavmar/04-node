import express from 'express'

const router = express.Router();

router.get('/add-product', (req,res/*,next*/)=>{
    res.send('Admin oldal GET metodus /add-product endpoint');
});

export default router; //ha nincs default akkor export {router,...} tobbrt i slehet adni
//export {router as adminRouter} is lehet akk a masikba nem kell az az {as}