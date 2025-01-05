const Shop = require("../../model/shop");
const Subcategories = require("../../model/subcategories");
const Categories = require("../../model/categories");


const createShop = async (req, res) => {
    try {
        const shop = await Shop.create(req.body);
        res.status(201).json({shop});
    } catch (error) {
        res.status(500).json({ error: "Failed to create shop." });
    }
};

const getAllShops = async (req, res) => {
    try {
        const shops = await Shop.find().populate("subcategories");
        res.status(200).json({shops});
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch shops." });
    }
};

const getShopBysubcategoriesname = async (req, res) => {
    try {
        const { name } = req.params;
    
        // Find the Category by its name
        const category = await Subcategories.findOne({ name: name });
        if (!category) {
          return res.status(404).json({ error: "Category not found" });
        }
    
        // Find Subcategories based on the category's ObjectId
        const subcategories = await Shop.find({ subcategories: category._id });
    
        res.status(200).json({subcategories});
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

 const updateShop = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedShop = await Shop.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedShop);
    } catch (error) {
        res.status(500).json({ error: "Failed to update shop." });
    }
};

const getShopById = async (req, res) => {
    try {
        const { id } = req.params;
        const shop = await Shop.findById(id);
        res.status(200).json(shop);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch shop." });
    }
};

const deleteShop = async (req, res) => {
    try {
        const { id } = req.params;
        await Shop.findByIdAndDelete(id);
        res.status(200).json({ message: "Shop deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete shop." });
    }
};

module.exports = { createShop, getAllShops, updateShop, deleteShop, getShopBysubcategoriesname,getShopById };