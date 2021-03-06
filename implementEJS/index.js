const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const homeRoutes = require('./routes/home');
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use(homeRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
   res.render('404',{pageTitle:'error page', path:'/'})
});

app.listen(3000);