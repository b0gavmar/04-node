import bodyParser from 'body-parser'
import express from 'express'

        //{roueter as adminRoutes}
import adminRoutes from './routes/admin.js' //beepitett moduloknal nem kell, amit mi csinlaunk ott kelll js
import shopRoutes from './routes.shop.js'

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin',adminRoutes);
app.use('/', shopRoutes);

app.listen(PORT, () => console.log(`server runs on https://localhost:` + PORT))