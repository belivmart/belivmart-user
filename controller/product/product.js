const Shop = require("../../model/shop");
const Subcategories = require("../../model/subcategories");
const Categories = require("../../model/categories");
const Product = require("../../model/products");

// create product
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ product });
    } catch (error) {
        res.status(500).json({ error: "Failed to create product." });
    }
} 

const getAllProducts = async (req, res) => {
    try {
        
        const products = await Product.find().populate("subcategories").populate("ShopId");
        res.status(200).json({products});
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products." });
    }
}

const getproductByShopNameNew = async (req, res) => {
    try {
        const { name } = req.params;
        const shop = await Shop.findOne({ name: name });

        if (!shop) {
            return res.status(404).json({ error: "Shop not found" });
        }

        const products = await Product.find({ shopName: shop._id }).populate("subcategories").populate("ShopId");
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products." });
    }
}


const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id).populate("subcategories").populate("ShopId")
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch product." });
    }
}

const getProductByShopNameNew = async (req, res) => {
    try {
        const { name } = req.params;
        // Find the Category by its name
        const shop = await Shop.findOne({ name: name });
        if (!shop) {
          return res.status(404).json({ error: "shop not found" });
        }
    
        // Find Subcategories based on the category's ObjectId
        const product = await Product.find({ ShopId: shop._id });
    
        res.status(200).json({product});
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: "Failed to update product." });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete product." });
    }
}

module.exports = { createProduct, getAllProducts, getProductByShopNameNew, getProductById, updateProduct, deleteProduct };
