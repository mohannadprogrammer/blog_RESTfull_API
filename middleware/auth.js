const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    console.log("token ************", token)
    if (!token) {
        return res.status(403).json({
            message: "no token provided"
        });
    }

    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "unauthorized"
            });
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports =  auth