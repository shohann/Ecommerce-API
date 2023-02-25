const { createCategory, 
        fetchCategoris,
        updateCategoryName
      } = require('../services/categoryService');
const { Conflict, NotFound } = require('../utils/appErrors')

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

module.exports.modifyCategory = async (req, res, next) => {
    try {
        const categoryId = req.params.categoryId;
        const categoryName = req.body.categoryName;
        await updateCategoryName(categoryId, categoryName);
        
        res.status(200)
           .json({
              success: 'true',
              message: `Category updated for id ${categoryId}`
        });
    } catch (error) {
        if (error.code === 'P2025') {
            next(new NotFound('Category not found'));
        } else if (error.code === 'P2002') {
            next(new Conflict('Category already exists with this name'));
        } else {
            next(error)
        } 
    }
}