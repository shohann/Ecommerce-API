const { Category } = require('../models/DBInit');

module.exports.createCategory = async (categoryName) => {
    return await Category.create({
        data: {
            categoryName: categoryName
        }
    });
};

module.exports.fetchCategoris = async () => {
    return await Category.findMany();
};

module.exports.fetchCategory = async (categoryName) => {
    return await Category.findUnique({
        where: {
            categoryName: categoryName
        }
    });
};

module.exports.updateCategoryName = async (categoryId, categoryName) => {
     await Category.update({
        where: {
            id: categoryId
        },
        data: {
            categoryName: categoryName
        }
    });
};