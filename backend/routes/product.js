var express = require('express');
var router = express.Router();

var productRepo = require('../repos/productRepo');

var vm = {};

/* GET home page. */
router.get('/detail/:productId', (req, res) => {
    var productId = req.params.productId;
  
  //Demo get data 
  productRepo.getProductById(productId).then(row => {
      vm = {
          product: row[0]
      }
      res.render('product');
  })

  //Demo insert data
  productRepo.insertNewProduct("Điện thoại Samsung Galaxy A50", 5000000).then(value => {
    console.log("Insert new product");
  })

  res.render('index', { title: 'Express example' });
});

module.exports = router;
