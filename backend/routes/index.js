var express = require('express');
var router = express.Router();

var productRepo = require('../repos/productRepo');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  //Demo get data 
  productRepo.getAllProducts().then(rows => {
    console.log("Getting product");
    console.log(rows);
  });

  //Demo insert data
  productRepo.insertNewProduct("Điện thoại Samsung Galaxy A50", 5000000).then(value => {
    console.log("Insert new product");
  })

  res.render('index', { title: 'Express example' });
});

module.exports = router;
