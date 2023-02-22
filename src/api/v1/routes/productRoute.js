const router = require('express').Router();
const { authorizeAccess } = require('../middlewares/handleCurrentUser');
const { pagination } = require('../middlewares/pagination')
const { setProduct,
        getProduct,
        searchProducts,
        getProductsByCategory
      } = require('../controllers/productController');

router.route('/')
      .post(setProduct) // auth -> admin
      .get(pagination, getProductsByCategory)

router.get('/all/search', searchProducts);
router.get('/:productId', getProduct);

// router.put('/addStock/:productId') 
// photo update
// 2 types of update stock only and full
// validation for both

// update product stock by increment 

module.exports = router;

//  localhost:3001/api/v1/products?category=Mobile&page=1&take=2
// set can only done by admin
// all role based auth

// localhost:3001/api/v1/products/all/search?arg=nokia