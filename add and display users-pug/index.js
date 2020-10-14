const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminData = require('./routes/admin');
const userRoutes = require('./routes/user');
const homeRoutes = require('./routes/home');
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));
const errorController = require('./controllers/error');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use(homeRoutes);
app.use(userRoutes);

app.use(errorController.get404);

app.listen(3000, () => {
    console.log('listening on port number 3000');
})