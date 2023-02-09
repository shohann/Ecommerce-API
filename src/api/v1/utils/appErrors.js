//  ApplicationError is for other unknown errors only, Its not for unknown route
class ApplicationError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }

    getCode() { return 500; }
};

// for login only -> not for signup is db error
class Unauthorized extends ApplicationError {
    constructor(message) {
        super(message);
        this.name = 'Unauthorized';
    }
    getCode() { return 401; }
}

// HTTP 409 Conflict -> Duplication
class  Conflict extends ApplicationError {
    constructor(message) {
        super(message);
        this.name = 'Conflict';
    }
    getCode() { return 409; }
}

// 403 Forbidden
class Forbidden extends ApplicationError {
    constructor(message) {
        super(message);
        this.name = 'Forbidden';
    }
    getCode() { return 403; }
}

class BadRequest extends ApplicationError {
    constructor(message) {
        super(message);
        this.name = 'BadRequest';
    }
    getCode() { return 400; }
};

class NotFound extends ApplicationError {
    constructor(message) {
        super(message);
        this.name = 'NotFound';
    }

    getCode() { return 404; }    
};

module.exports = {
    ApplicationError,
    Unauthorized,
    Conflict,
    BadRequest,
    NotFound,
    Forbidden
}