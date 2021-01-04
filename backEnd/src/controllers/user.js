import models from '../models';
import{ Op } from 'sequelize';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import 'dotenv/config';

//////////////////////////////////////
/////////// signup  user //////////////
//////////////////////////////////////

export  const signUp = async (req, res) => {
    try {  
             
        const searchOption = { where:{ [Op.or]:[ {email: req.body.email }, {userName: req.body.userName} ]}};
        const searchUser = await models.User.findOne(searchOption);
        if( !searchUser){
            const hashPassword = await bcrypt.hash(req.body.password, 10);
            const createUser = await models.User.create({
                email: req.body.email,
                userName: req.body.userName,
                password: hashPassword,
                isAdmin: false
            });
            console.log(createUser.isAdmin);
            return res.status(201).json(createUser);

        } else if ( searchUser.email === req.body.email){
            return res.status(200).json({
                error: 'email already exist !'
            })
        } else if ( searchUser.userName === req.body.userName){
            return res.status(200).json({
                error: 'user already exist !'
            })            
        }     
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
}

//////////////////////////////////////
/////////// login user //////////////
//////////////////////////////////////
export const logIn = async (req, res) => {
    try {        
        const searchOption = { where:{ userName: req.body.userName }};
        const searchUser = await models.User.findOne(searchOption);   
       // console.log(searchUser.id);     
        if( !searchUser){
            return res.status(200).json({
                error: 'incorrect user'            
            });
        } else {
            const passVerify = await bcrypt.compare(req.body.password, searchUser.password);
            if (!passVerify){
                return res.status(200).json({
                    error: 'wrong password !'            
                });
            }
            
            res.status(200).json({
                userId: searchUser.id,
                token: jwt.sign(
                    { userId: searchUser.id,
                      isAdmin: searchUser.isAdmin},
                    ( process.env.AUTH_TOKEN ),
                    { expiresIn: '24h' }
                )
            }); 
                            
        }         
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
}

//////////////////////////////////////
/////////// getting user //////////////
//////////////////////////////////////
export const getUser = async (req, res) => {
    try {   
        console.log(req.body);     
        const searchOption = { 
            attributes: [ 'id','email', 'userName', 'isAdmin'], 
            where:{ id: req.body.id }};
        const searchUser = await models.User.findOne(searchOption);   
        res.status(200).json({ searchUser }); 
       
    } catch (error) {
      return res.status(504).json({error: error.message})
    }
}


//////////////////////////////////////
/////////// deleting user //////////////
//////////////////////////////////////
export const deleteUser = async (req, res) => {
    try {  
          
        const searchOption = { where:{ id: req.body.id }};
        const searchUser = await models.User.findOne(searchOption);   
        console.log(searchUser.userName)
        res.status(200).json({ "message": "user deleted !" }); 
        console.log('deleted');
        

       // const deleteUser = await searchUser.destroy();
        
       
    } catch (error) {
      return res.status(504).json({error: error.message})
    }
}

export const getAllUser = async (req, res) => {
    try {  
        const token = req.headers.authorization.split(' ')[1]; // catch token 
        const decodedToken = jwt.verify(token, process.env.AUTH_TOKEN); // verify token
        const user = await models.User.findOne({ where: { id: decodedToken.userId } });
        
        const isAdmin = decodedToken.isAdmin;
        if(isAdmin){
            const getAllUser = await models.User.findAll({
                where: {
                isAdmin: false
                }});
            return res.status(201).json(getAllUser);
        }
        else {return res.status(200).json({
            error: 'profil non admin !'
        })}
       
    } catch (error) {
      return res.status(504).json({error: error.message})
    }
}


