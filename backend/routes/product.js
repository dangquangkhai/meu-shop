var express = require('express');
var router = express.Router();

var productRepo = require('../repos/productRepo');

var vm = {};

/* GET home page. */
router.get('/detail/:productId', (req, res) => {
  console.log("detail product");
  
  var productID = req.params.productId;
  
  productRepo.getProductById(productID).then(row => {
      vm = {
          product: row[0]
      }
      //res.render('product');
      res.send({productId: productID});
  })
});

module.exports = router;
