import bodyParser from 'body-parser'
import express from 'express'

import {roueter as adminRoutes} from './routes/admin.js' //beepitett moduloknal nem kell, amit mi csinlaunk ott kelll js

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin',adminRoutes);

app.listen(PORT, () => console.log(`server runs on https://localhost:` + PORT))