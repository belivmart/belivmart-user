const express = require("express");
const Subcategories = express.Router();
const Data = require("../../controller/product/subcatogey");

Subcategories.get("/get-all-subcategories", Data.getAllSubcategories);
Subcategories.post("/add-subcategory", Data.createSubcategory);
Subcategories.delete("/delete-subcategory/:id", Data.deleteSubcategory);
Subcategories.put("/update-subcategory/:id", Data.updateSubcategory);
// Subcategories.get("/get-single-subcategory/:id", Data.getSubcategoryById);
Subcategories.get("/get-subcategories-category-name/:name", Data.getCategoryByname);
module.exports = Subcategories; 