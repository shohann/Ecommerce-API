

module.exports.setOrderWithPayment = (req, res, next) => {
    try {
        
        res.status(201).json({
            success: true,
            message: 'Order has been placed successfully'
        })
    } catch (error) {
        next(error);
    }
}