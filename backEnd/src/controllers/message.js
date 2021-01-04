import models from '../models';
import{ Op } from 'sequelize';
import bcrypt from "bcrypt";


export  const createMessage = async (req, res) => {
    try {     
      let content = req.body.content;   
       
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
};



export  const getAllMessages = async (req, res) => {
    try {        
       
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
}


export  const getOneMessage = async (req, res) => {
    try {        
       
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
}


export  const modifyMessage = async (req, res) => {
    try {        
       
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
}


export  const deleteMessage = async (req, res) => {
    try {        
       
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
}
