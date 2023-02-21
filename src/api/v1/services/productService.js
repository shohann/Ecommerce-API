const { Product } = require('../models/DBInit');
const { BadRequest } = require('../utils/appErrors')

module.exports.createProduct = async (product) => {
    return await Product.create({
        data: product
    })
}


module.exports.fetchProductForCart = async (productId) => {
    return await Product.findUnique({
        where: {
            id: productId
        },
        select: {
            name: true,
            price: true,
            stock: true
        }
    });
};

// with review
module.exports.fetchProductForReview = async (productId) => {
    return await Product.findUnique({
        where: {
            id: productId
        },
        select: {
            reviews: true
        }
    })
}

// for order rouute // items
module.exports.updateProductStockForOrder =  async (item) => {
        const updatedProduct = await Product.update({
            where: {
                id: item.productId
            }, 
            data: {
                stock: {
                    decrement:item.quantity
                }
            }
        });

        return updatedProduct

        // const updatedProducts = [];

        // for (let i = 0; i < items.length; i++) {
        //     let updatedProduct =  Product.update({
        //         where: {
        //             id: items[i].productId
        //         }, 
        //         data: {
        //             stock: {
        //                 decrement:items[i].quantity
        //             }
        //         }
        //     });

        //     updatedProducts.push(updatedProduct);
        // }

        // // return await Promise.all(updatedProducts); 
        // const results =  await Promise.all(updatedProducts); 
        // let validity;

        // for( let i = 0; i < results.length; i++) {
        //     if (results[i].stock < 0) {
        //         validity = false
        //     } else {
        //         validity = true
        //     }
        // }

        // return validity;  
};

// For product stock updation by admin at any time
module.exports.updateProductStock = async (productId, stock) => {
    return await Product.update({
        where: {
            id: productId
            //
        },
        data: {
            stock: {
                increment: stock
            }
        }
    });
};

