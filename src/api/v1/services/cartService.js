const { cacheClient } = require('../cache/cacheDBInit');

// cart deletion after order

module.exports.createEmptyCart = () => {
    const newCart = {
        total: 0,
        items: []
    }
    return newCart
};

module.exports.findExistingProduct = (items, productId) => {
    const productIndex = items.findIndex(item => item.productId === productId);
    return productIndex;
};

module.exports.incrementCartItemQuantity = async (userId, cart, ItemIndex) => {
    let { total, items } = cart;
    const price =  items[ItemIndex].price;
    items[ItemIndex].quantity = items[ItemIndex].quantity + 1;
    items[ItemIndex].subTotal = items[ItemIndex].subTotal + price;
    total = total + price;
    
    await cacheClient.set(userId, JSON.stringify({
        total: total,
        items: items

    }), { EX: 2000 });
};

module.exports.createCartItemToCart = async (userId, productId, price, currentCart) => {
    let { total , items } = currentCart;

    const newItem = {
        productId: productId,
        price: price,
        subTotal: price,
        quantity: 1
    }

    items.push(newItem)

    await cacheClient.set(userId, JSON.stringify({
        total: total + price,
        items: items

    }), { EX: 2000 });
};

module.exports.fetchCartAndItems = async (userId) => {
    return JSON.parse(await cacheClient.get(userId));
};

module.exports.decrementCartItemQuantity = async (userId, currentCart, itemIndex) => {
    let  { total, items } = currentCart;
    const price = items[itemIndex].price;

    if (items[itemIndex].quantity - 1 === 0) {
        items.splice(itemIndex, 1);
        total = total - price;
    } else {
        items[itemIndex].quantity--;
        items[itemIndex].subTotal = items[itemIndex].subTotal - price;
        total = total - price;
    }

    await cacheClient.set(userId, JSON.stringify({
        total: total,
        items: items

    }), { EX: 2000 });
};

module.exports.deleteCartItem = async (userId, currentCart, ItemIndex) => {
    let { total, items } = currentCart;
    const productSubTotal = items[ItemIndex].subTotal;
    items.splice(ItemIndex, 1);
    total = total - productSubTotal;

    await cacheClient.set(userId, JSON.stringify({
        total: total,
        items: items

    }), { EX: 2000 });
}

module.exports.deleteCart = async (userId) => {
    await cacheClient.del(userId)
}














