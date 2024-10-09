import bodyParser from 'body-parser'
import express from 'express'
import path from 'path';

        //{roueter as adminRoutes}
import {adminRoutes} from './routes/admin.js' //beepitett moduloknal nem kell, amit mi csinlaunk ott kelll js
import shopRoutes from './routes/shop.js'
import __dirname from './util/rootpath.js'

const app = express();
const PORT = 3000;

//middleware ahol tortennek aa dolgok
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine','ejs');
app.set('views' ,'views');

app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRoutes);
app.use('/', shopRoutes);

app.use((req,res)=>{
        res.status(404).render('404.ejs');
});

app.listen(PORT, () => console.log(`server runs on http://localhost:${PORT}`))