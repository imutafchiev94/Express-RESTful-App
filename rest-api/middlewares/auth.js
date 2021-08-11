const jwt = require('jsonwebtoken');

module.auth = function(req, res, next) {
    let authorizationHeader = req.get('Authorization');
    if(authorizationHeader) {
        let token = authorizationHeader.split(' ')[1];

        jwt.verify(token, 'SOMESUPERSECRET')
            .then(decoded => {
                req.user = decoded;
            });
    }

    next();
}

module.isAuth = function(req, res, next) {

}
