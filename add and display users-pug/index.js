const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRoutes = require('./routes/admin');
const usersRoutes = require('./routes/users');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views','views');
app.use('/admin', adminRoutes.routes);
app.use(usersRoutes);

app.use((req, res, next) => {
    res.render('404',{pageTitle: '404'});
});
const port=process.env.PORT || 3000
app.listen(port,() => {
    console.log(`listening on http://localhost:${port}`);
});