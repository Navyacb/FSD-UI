const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const publicRoutes = require('./routes/public');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', adminRoutes);
app.use(publicRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);