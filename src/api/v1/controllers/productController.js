const { createProduct,
        fetchProduct,
        fetchProductSearchResults,
        fetchProductsWithPagination,
        updateProductStock
      } = require('../services/productService');
const { NotFound } = require('../utils/appErrors');

module.exports.getProduct = async (req, res, next) => {
    try {
        const productId = req.params.productId;
        const product = await fetchProduct(productId);
        if (!product)  throw new NotFound('Product not found');

        res.status(200).json({
            success: true,
            message: { product: product }
        });
    } catch (error) {
        next(error)
    }
};

module.exports.getProductsByCategory = async (req, res, next) => {
    try {
        const { category, take, skip } = req;
        const products = await fetchProductsWithPagination(category, skip, take);

        res.status(200).json({
            success: true,
            message: { products: products }
        })
    } catch (error) {
        next(error)
    }
};

module.exports.searchProducts = async (req, res, next) => {
    try {
        const { arg } = req.query;
        const products = await fetchProductSearchResults(arg);
        
        res.status(200)
           .json({
                success: true,
                message: { products: products }
           })
    } catch (error) {
        next(error)
    }
}

module.exports.setProduct = async (req, res, next) => {
    try {
        const { image, cloudId, categoryId} = req;
        const { name, price, stock, desc } = req.body;
        const product = await createProduct({
            name: name,
            price: price,
            stock: stock,
            desc: desc,
            image: image,
            cloudId: cloudId,
            categoryId: categoryId
        })

        res.status(201).json({
            success: true,
            message: product
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
};

module.exports.addProductStock = async (req, res, next) => {
    try {
        const productId = req.params.productId;
        const stock = req.body.stock;
        const updatedProduct = await updateProductStock(productId, stock);

        res.status(200).json({
            success: true,
            message: updatedProduct
        })
    } catch (error) {
        if (error.code === 'P2025') {
            next(new NotFound('Product not found'));
        } else {
            next(error);
        }
    }
};





