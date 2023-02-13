const { createProduct } = require('../services/productService');

module.exports.setProduct = async (req, res, next) => {
    try {

        const product = await createProduct(req.body)

        res.status(201).json({
            success: true,
            message: product
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
};

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

