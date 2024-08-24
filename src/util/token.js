const jwt = require('jsonwebtoken' );

const checktoken = async (token, id, key) => jwt.verify(token, key, (err, decoded) => {


    if(!id) return false;
    else{
        // console.log(token);
        //RESULTOU EM NADA
        return true;
    }


});

const setToken = async (id, key) => {
//  console.log(id);
//  O ID DO COISO
//  console.log(key);
 //O NICK NAME DO COISO
 if (id) {
    return jwt.sign({id }, key, { expiresIn: 28800 });
}
return false;
};

module.exports = {
 checktoken,
 setToken,
};

