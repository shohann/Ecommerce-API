const { fetchCategory } = require('../services/categoryService');
const { BadRequest } = require('../utils/appErrors');

module.exports.checkProductCategory = async (req, res, next) => {
    try {
        const product = req.body;
        const category  = await fetchCategory(product.category);
        if (!category) {
            throw new BadRequest('Invalid category name');
        }
        req.categoryId = category.id;
        next();
    } catch (error) {
        next(error);
    }
};