const { createCategory, fetchCategoris } = require('../services/categoryService');
const { Conflict } = require('../utils/appErrors')

module.exports.setCategory = async (req, res, next) => {
    try {
        const { categoryName } = req.body;
        const newCategory = await createCategory(categoryName);

        res.status(201).json({
            success: true,
            message: `Category created by name '${newCategory.categoryName}'`
        })
    } catch (error) {
        if (error.code === 'P2002') {
            next(new Conflict(`A category already exists by this name`));
        } else{
            next(error)
        }
    }
};

module.exports.getCategories = async (req, res, next) => {
    try {
        const categories = await fetchCategoris();
        
        res.status(200)
           .json({
                success: true,
                message: categories
           });
    } catch (error) {
        next();
    }
};


