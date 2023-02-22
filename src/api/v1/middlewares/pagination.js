const { getSkipAndTake } = require('../utils/offsetPagination');

module.exports.pagination = async (req, res, next) => {
    try {
        const { category, page, size } = req.query;
        const { take, skip } = getSkipAndTake(page, size);

        req.category = category;
        req.take = take;
        req.skip = skip;
        
        next();
    } catch (error) {
        res.send(error)
    }
};
