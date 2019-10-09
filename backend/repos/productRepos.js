var db = require('../fn/db');

exports.getAllProducts = () => {
    var sql = `select * from products`;
	return db.load(sql);
}

exports.getProductById = (productId) => {
    var sql = `select * from products where id='${productId}'`;
	return db.load(sql);
}

exports.insertNewProduct = (proName, proPrice) => {
    var sql = `insert products(name, price) VALUES ('${proName}','${proPrice}')`;
    return db.save(sql);
}