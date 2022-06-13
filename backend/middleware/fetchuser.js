const jwt = require('jsonwebtoken');
const JWT_SECRET = "lucifer";

const fetchuser =(req, res, next) => {
    //Get the user from the JWT token and add id to req object
    const token = req.header('auth-token'); // Geting token from the HEADER
    if(!token){
        res.status(401).send({error: "please authenticate using a valid token"});
    }
    try {
        const data = jwt.varify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.send(401);
    }
}

module.exports = fetchuser;