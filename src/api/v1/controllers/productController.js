const { createProduct,
        fetchProduct,
        fetchProductSearchResults,
        fetchProductsWithPagination
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

// working
module.exports.setProduct = async (req, res, next) => {
    try {
        console.log(req.body.name);
        // const product = await createProduct(req.body)

        res.status(201).json({
            success: true,
            // message: product
            message: 'product'
        })
    } catch (error) {
        // console.log(error);
        next(error)
    }
};

module.exports.addProductStock = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
}

// add more stock -> updateProduct Stock

// get in stock products


// 8f1eaff9-7008-446a-8f52-33e1c81db37f

/*

  name           
  stock         
  image         
  desc          
  cloudId       
  categoryId  

  "name": "Nokia T9",
  "stock": 5,
  "desc": "This is description",
  "categoryId": "8f1eaff9-7008-446a-8f52-33e1c81db37f"

*/

