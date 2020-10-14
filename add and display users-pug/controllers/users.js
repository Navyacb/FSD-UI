const Product = require('../models/user');
exports.getAddUser=(req, res)=>
{
    res.render('add-user', {pageTitle: 'Add User', path: '/admin/add-user'});
}
exports.postAddUser = (req, res) => {
    products.push({ title: req.body.title });
    product.save();
    res.redirect('/');
};
exports.getProducts = (req, res) => {
    const products = Product.fetchAll();
    res.render('user', {prods: products, pageTitle: 'User', path: '/'});
};