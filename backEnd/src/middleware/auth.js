import jwt from "jsonwebtoken";
import 'dotenv/config';
import models from '../models';

const auth = async (req, res, next)=> {
    try {
        const token = req.headers.authorization.split(' ')[1]; // catch token 
        const decodedToken = jwt.verify(token, process.env.AUTH_TOKEN); // verify token
        const user = await models.User.findOne({ where: { id: decodedToken.userId } });
        const userId = decodedToken.userId; 
        const isAdmin = decodedToken.isAdmin;
        req.user = user
        
        
           
        if ( !isAdmin && req.body.id !== userId ) {// compare tokens
            res.status(500).json({
                error : 'authorisation refusée car mauvais user et profil non admin'
            });      
            
        } else if (isAdmin && (req.body.id !== userId || req.body.id == userId) ){
            console.log('profil admin');            
            next();
        } else  {
            console.log('profil user');             
            next();
        }
    } catch (error) {
        res.status(401).json({
            error: 'requete verif token impossible!'
        });
    }
};

module.exports = auth;