const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

/** check out https://jwt.io 
 * for more details on jason web token;
*/

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log(`jwt: ${token}`);
console.log();

var decoded = jwt.verify(token, '123abc');
console.log('decoded:', decoded);
console.log();

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(SHA256(message));
// console.log(`Hash: ${hash}`);
// console.log();

// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + "123abc").toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data) + "123abc").toString();

// if(token.hash === resultHash){
//     console.log("Data has been checked OK.")
// }
// else{
//     console.log("Data seems compromised. Don\' trust!");
// }