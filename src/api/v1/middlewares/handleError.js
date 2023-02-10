const { ApplicationError } = require('../utils/appErrors');

module.exports.handleError = (error, req, res, next) => {
    let statusCode = 500;
    if (error instanceof ApplicationError) {
        statusCode = error.getCode();
    }

    return res.status(statusCode).json({
        success: false,
        message: error.message
    });
};

module.exports.handleUnknownRoute = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `Can't find ${req.originalUrl} on this server!`
      });
};