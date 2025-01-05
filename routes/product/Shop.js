const express = require("express");
const Shop = express.Router();
const Data = require("../../controller/product/shop");

Shop.get("/get-all-shops", Data.getAllShops);
Shop.post("/add-shop", Data.createShop);
Shop.delete("/delete-shop/:id", Data.deleteShop);
Shop.put("/update-shop/:id", Data.updateShop);
Shop.get("/get-single-shop/:id", Data.getShopById);
Shop.get("/get-shops-by-subcategories-name/:name", Data.getShopBysubcategoriesname);

module.exports = Shop;