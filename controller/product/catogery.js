const Categories = require("../../model/categories");


const createCategory = async (req, res) => {
    try {
        const category = new Categories(req.body);
        await category.save();
        res.status(200).json(category);
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({ error: "Failed to create category." });
    }
};

 const getAllCategories = async (req, res) => {
    try {
        const categories = await Categories.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ error: "Failed to fetch categories." });
    }   
};

const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Categories.findById(id);
        res.status(200).json(category);
    } catch (error) {
        console.error("Error fetching category:", error);
        res.status(500).json({ error: "Failed to fetch category." });
    }
};

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCategory = await Categories.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedCategory);
    } catch (error) {
        console.error("Error updating category:", error);
        res.status(500).json({ error: "Failed to update category." });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        await Categories.findByIdAndDelete(id);
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        console.error("Error deleting category:", error);
        res.status(500).json({ error: "Failed to delete category." });
    }
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
};