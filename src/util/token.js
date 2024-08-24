const jwt = require('jsonwebtoken' );

const checktoken = async (token, id, key) => jwt.verify(token, key, (err, decoded) => {
    console.log(decoded.foo)

    if(!token.checkToken(req.headers.token,req.headers.iduser,req.headers.nick)) return false;
    else{
        return true;
    }


});

const setToken = async (id, key) => {
 console.log(id);
 if (id) {
    return jwt.sign({id }, key, { expiresIn: 28800 });
}
return false;
};

module.exports = {
 checktoken,
 setToken,
};