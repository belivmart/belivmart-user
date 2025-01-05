const express = require("express");
const product = express.Router();
const Data = require("../../controller/product/product");

product.get("/get-all-new-products", Data.getAllProducts);
product.post("/create-product", Data.createProduct);
product.delete("/delete-product/:id", Data.deleteProduct);
product.put("/update-product/:id", Data.updateProduct);
product.get("/get-single-new-product/:id", Data.getProductById);
product.get("/get-all-items-by-shop/:name", Data.getProductByShopNameNew);
// product.get("/get-all-products-for-user/:name", Data.getproductsbysubcategoryName);

module.exports = product; 