const { decodeAccessToken, 
        decodeRefreshToken, 
        getTokenFromTokenHeader } = require('../utils/jwt');

const { BadRequest, Forbidden } = require('../utils/appErrors')

module.exports.authorizeAccess = (req, res, next) => {
    try {
        const tokenHeader = req.header('Authorization');
        const token = getTokenFromTokenHeader(tokenHeader);
        const decoded = decodeAccessToken(token);
        req.user = decoded
        next();
    } catch (error) {
        if (error.name === 'TypeError') {
            next(new BadRequest('No token Provided'));
        } else if (error.name === 'JsonWebTokenError') {
            next(new BadRequest('Invalid Token'));
        } else if (error.name === 'TokenExpiredError') {
            next(new BadRequest('Token Expired'))
        } else {
            next(error);
        }
        
    }
};

// Incomplete
module.exports.authorizeRefresh = (req, res, next) => {
    try {
        const tokenHeader = req.header('Authorization');
        const token = getTokenFromTokenHeader(tokenHeader);
        const decoded = decodeRefreshToken(token);
        req.user = decoded
        next();
    } catch (error) {
        if (error.name === 'TypeError') {
            next(new BadRequest('No token Provided'));
        } else if (error.name === 'JsonWebTokenError') {
            next(new BadRequest('Invalid Token'));
        } else if (error.name === 'TokenExpiredError') {
            next(new BadRequest('Token Expired'))
        }
        next(error)
    }
};

module.exports.authorizeAdmin = (req, res, next) => {
    try {
        if (req.user.role !== 'admin') {
            throw new Forbidden('Access Denied');
        } else {
            next();
        }
    } catch (error) {
        next(error);
    }
}

module.exports.authorizeEmployee = (req, res, next) => {
    try {
        if (req.user.role !== 'employee') {
            throw new Forbidden('Access Denied');
        } else {
            next();
        }
    } catch (error) {
        next(error);
    }
}