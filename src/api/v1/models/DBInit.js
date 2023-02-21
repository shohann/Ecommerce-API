const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient;

module.exports = {
    User: prisma.user,
    Profile: prisma.profile,
    Category: prisma.category,
    Product: prisma.product,
    Cart: prisma.cart,
    CartItem: prisma.cart_item,
    Order: prisma.order,
    OrderDetail: prisma.order_detail,
    TrackOrder: prisma.track_order,
    PaymentDetail: prisma.payment_detail,
    Review: prisma.reviews,
    prisma: prisma
};