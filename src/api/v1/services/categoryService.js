const { Category } = require('../models/DBInit');

module.exports.createCategory = async (categoryName) => {
    return await Category.create({
        data: {
            categoryName: categoryName
        }
    });
};