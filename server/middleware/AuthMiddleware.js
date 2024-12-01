const jwt = require('jsonwebtoken');  
const User = require('../model/UserModel');  

const protect = async (req, res, next) => {  
    
    let token;  

    // Check for authorization header  
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {  
        token = req.headers.authorization.split(' ')[1];  
    }  

    // If no token, respond with unauthorized  
    if (!token) {  
        console.log('Not authorized: No token provided');  
        return res.status(401).json({ message: 'Not authorized: No token provided' });  
    }  

    try {  
        console.log(`token ${token}`)
        const decoded = jwt.verify(token, '12345'); // Use a secret key appropriate for your application  
        console.log('Protecting route')
        req.user = await User.findById(decoded.id); // Optionally fetch user details if needed  
        next(); // Proceed to next middleware or route handler  
    } catch (error) {  
        console.log('Token verification failed', error);  
        res.status(401).json({ message: 'Not authorized: Token is invalid' }); // Respond if the token is invalid  
    }  
};  

module.exports = { protect };