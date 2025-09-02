let jwt = require('jsonwebtoken');

let myMiddleware = (req,res,next)=>{
    console.log(req.headers.authorization)

    let token = req.headers.authorization
    let decoded = jwt.verify(token, 'shakil0007');
    
    if (decoded.data) {
        next()
    }else{
        res.send('You are not Authorized')
    }
}
module.exports = myMiddleware
