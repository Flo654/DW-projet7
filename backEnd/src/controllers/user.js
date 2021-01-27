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

        } else if ( searchUser.email == req.body.email){
            return res.status(400).json({
                message: 'adresse mail déja existante!'
            })
        } else if ( searchUser.userName == req.body.userName){
            return res.status(400).json({
                message: 'utilisateur déjà existant !'
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
        console.log(req.body.userName); 
        const searchOption = { where:{ userName: req.body.userName }};
        const searchUser = await models.User.findOne(searchOption);   
        
           
        if( !searchUser){
            
           return res.status(400).json({ message: "utilisateur inconnu"})            
            
        } else {
            const passVerify = await bcrypt.compare(req.body.password, searchUser.password);
            if (!passVerify){
                console.log(passVerify);
                return res.status(400).json({ message: "mot de passe erroné"})
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
///////// getting all users //////////
//////////////////////////////////////
export const getAllUser = async (req, res) => {
    try {  
         // si le compte est administrateur ==> authorisation d'obtenir la liste de tous les comptes      
        if(req.user.isAdmin){
            const getAllUser = await models.User.findAll({
               });
            return res.status(201).json(getAllUser);
        }
        else {return res.status(200).json({
            error: 'profil non admin !'
        })}
       
    } catch (error) {
      return res.status(504).json({error: error.message})
    }
}






//////////////////////////////////////
/////////// getting user //////////////
//////////////////////////////////////
export const getUser = async (req, res) => {
    try {   
            
        const searchOption = { 
            attributes: [ 'id','email', 'userName', 'isAdmin'], 
            where:{ id: req.user.id }};
        const searchUser = await models.User.findOne(searchOption);   
        res.status(200).json({ searchUser }); 
       
    } catch (error) {
      return res.status(504).json({error: error.message})
    }
}


//////////////////////////////////////
/////////// deleting user ///////////
//////////////////////////////////////
export const deleteUser = async (req, res) => {
    try {  
         
        const searchOption = { where:{ id: req.params.id }};
        const searchUser = await models.User.findOne(searchOption);
        
        if((req.params.id != req.user.id) &&  !req.user.isAdmin  ){
            throw new Error('vous ne pouvez pas supprimer le compte')
            return
        } 
        models.Message.destroy({ where: { userId: req.params.id }})
        await searchUser.destroy();       
        res.status(200).json({ "message": "user deleted !" }); 
             
    } catch (error) {
      return res.status(504).json({message: error.message})
    }
}




//////////////////////////////////////
/////////// modify user ///////////
//////////////////////////////////////

export const modifyUser = async (req, res) => {
    try {  
        const searchOption = { where:{ id: req.params.id }};
        const searchUser = await models.User.findOne(searchOption);
        if(!req.user.isAdmin){
            throw new Error('vous ne pouvez pas supprimer le compte')
            return
        }   
       console.log('modified');
        res.status(200).json({ "message": "user modified !" }); 
        await models.User.update(
            { isAdmin: req.body.isAdmin },
            { where: { id: req.params.id } }
        );       
    } catch (error) {
      return res.status(504).json({error: error.message})
    }
}



