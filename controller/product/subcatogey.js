const Subcategories = require("../../model/subcategories");
const Categories = require("../../model/categories");

const createSubcategory = async (req, res) => {
    try {
       const subcategorie = await Subcategories.create(req.body);
        res.status(201).json({subcategorie});
    } catch (error) {
        res.status(500).json({ error: "Failed to create subcategory." });
    }
};

const getAllSubcategories = async (req, res) => {
    try {
        const subcategories = await Subcategories.find().populate("categoriesId");
        res.status(200).json({subcategories});
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch subcategories." });
    }
};

const updateSubcategory = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSubcategory = await Subcategories.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedSubcategory);
    } catch (error) {
        res.status(500).json({ error: "Failed to update subcategory." });
    }
};

const deleteSubcategory = async (req, res) => {
    try {
        const { id } = req.params;
        await Subcategories.findByIdAndDelete(id);
        res.status(200).json({ message: "Subcategory deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete subcategory." });
    }
};

const getCategoryByname = async (req, res) => {
    try {
      const { name } = req.params;
  
      // Find the Category by its name (case-insensitive)
      const category = await Categories.findOne({ name: { $regex: new RegExp('^' + name + '$', 'i') } });
  
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
  
      // Find Subcategories based on the category's ObjectId
      const subcategories = await Subcategories.find({ categoriesId: category._id });
  
      // Return the subcategories in the response
      res.status(200).json(subcategories);
    } catch (error) {
      console.error("Error retrieving category or subcategories:", error);  // Detailed error log
      res.status(500).json({ error: error.message });
    }
  };
  
  

module.exports = {
    createSubcategory,
    getAllSubcategories,
    updateSubcategory,
    deleteSubcategory,
    getCategoryByname
};
