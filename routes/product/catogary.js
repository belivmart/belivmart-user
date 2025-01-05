const express = require("express");
const Categories = express.Router();
const Data = require("../../controller/product/catogery");

Categories.get("/get-all-categories", Data.getAllCategories);
Categories.post("/create-category", Data.createCategory);
Categories.delete("/delete-category/:id", Data.deleteCategory);
Categories.put("/update-category/:id", Data.updateCategory);
Categories.get("/get-single-category/:id", Data.getCategoryById);
module.exports = Categories;
