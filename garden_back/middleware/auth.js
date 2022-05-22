import jwt from 'jsonwebtoken';
import config from '../config.js';

const auth = (req,res,next) => {
    try{
        const token = req.headers['authorization'];
        jwt.verify(token, config.JwtSecret);
        next();
    } catch (ex) {
        res.status(401).send('Invalid token.');
    }
};

export default auth;