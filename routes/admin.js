import express from 'express'
import path from 'path'

import __dirname from '../util/rootpath.js';

const router = express.Router();

const product = [];

router.get('/add-product', (req, res/*,next*/) => {
    res.status(404).render('add-product.ejs', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
});

router.post('/add-product', (req, res) => {
    const title = req.body.title;
    console.log(title);
    res.redirect('/');
});

export { router as adminRoutes, product }; //ha nincs default akkor export {router,...} tobbrt i slehet adni
//export {router as adminRouter} is lehet akk a masikba nem kell az az {as}