const { createCategory } = require('../services//categoryService');

const { Conflict } = require('../utils/appErrors')

module.exports.getCategory = async (req, res, next) => {
    
}

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

};

module.exports.modifyCategory = async (req, res, next) => {

};

module.exports.removeCategory = async (req, res, next) => {

};

