const jwt = require('jsonwebtoken' );

const checktoken = async (token, id, key) => jwt.verify(token, key, (err, decoded) => {

    if(err){
        return false;
    }
    else if(decoded){
        if(decoded.id == id)
        {
            return true;
        }
        else{
            return false;
        }
    }

});

const setToken = async (id, key) => {
 console.log(id);
//  O ID DO COISO
 console.log(key);
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















// const jwt = require('jsonwebtoken' );

// const checktoken = async (token, id, key) => jwt.verify(token, key, (err, decoded) => {

//     if(err){
//         return false;
//     }
//     else if(decoded){
//         if(decoded.id == id)
//         {
//             return true;
//         }
//         else{
//             return false;
//         }
//     }

// });

// const setToken = async (id, key) => {
//     //  console.log(id);
//     //  O ID DO COISO
//     //  console.log(key);
//      //O NICK NAME DO COISO
//      if (id) {
//         return jwt.sign({id }, key, { expiresIn: 28800 });
//     }

//     return false;
// };

// module.exports = {
//     checktoken,
//     setToken,
//    };