const Product = require('../models/user');

exports.getAddUser = (req, res, next) => {
  res.render('add-user', {
    pageTitle: 'Add User',
    path: '/admin/add-user',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddUser = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('user', {
      prods: products,
      pageTitle: 'User',
      path: '/'
    });
  });
};