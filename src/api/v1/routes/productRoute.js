const router = require('express').Router();
const { authorizeAccess,
        authorizeAdmin 
      } = require('../middlewares/handleCurrentUser');
const { pagination } = require('../middlewares/pagination');
const { localUpload, 
        cloudUpload
      } = require('../middlewares/handleUpload');
const { validateProduct,
        validateAddStock
      } = require('../middlewares/validate');
const { setProduct,
        getProduct,
        searchProducts,
        getProductsByCategory,
        addProductStock
      } = require('../controllers/productController');
const { checkProductCategory } = require('../middlewares/checkProductCategory');

router.route('/')
      .post(authorizeAccess, 
            authorizeAdmin, 
            localUpload,
            validateProduct,
            cloudUpload,
            checkProductCategory, 
            setProduct)
      .get(pagination, getProductsByCategory)
router.get('/all/search', searchProducts);
router.get('/:productId', getProduct);
router.patch('/addStock/:productId', 
             authorizeAccess, 
             authorizeAdmin, 
             validateAddStock, 
             addProductStock
            );

module.exports = router;

// localhost:3001/api/v1/products?category=Mobile&page=1&size=2
// localhost:3001/api/v1/products/all/search?arg=nokia