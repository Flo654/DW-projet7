import models from '../models';

export  const createMessage = async (req, res) => {
    try {           
      const message = await models.Message.create({
        UserId: req.user.id,
        content: req.body.content,
        attachment: req.body.attachment,
        likes: req.body.likes
    });
    res.status(200).json({ message: 'message crée' });
       
    } catch (error) {
      return res.status(500).json({error: error.message})
    };
};



export  const getAllMessages = async (req, res) => {
    try { 
      const getMessages = await models.Message.findAll({
        order: [['updatedAt', 'DESC']],
        include:[{
          model: models.User,
          attributes: ['Username', 'isAdmin']
        }]
      });
      
    return res.status(201).json(getMessages);       
       
    } catch (error) {
      return res.status(500).json({error: error.message})
    };
};


export  const getOneMessage = async (req, res) => {
    try {        
      const getMessage = await models.Message.findOne({
        include: [{
          model: models.User,
          attributes: ['id','isAdmin' ]
        }],
        where: { id : req.params.id }
      });
      
      return res.status(201).json(getMessage);
    } catch (error) {
      return res.status(500).json({error: error.message})
    };
};


export  const modifyMessage = async (req, res) => {
    try {  
     console.log(req.body.content);
      let messageToModify = await models.Message.findByPk(req.params.id); 
                    
      if (req.user.isAdmin || (req.user.id == messageToModify.userId)) {
        await models.Message.update(
          {content: req.body.content                           
          },
          {where: { id: messageToModify.id }
        });
        res.status(200).send({
          message: "Publication modifiée"});   

        } else{ res.status(403).json('Utilisateur non autorisé à editer ce post');}

         
    } catch (error) {
      return res.status(500).json({error: error.message})
    };
};


export  const deleteMessage = async (req, res) => {
    try {     
     
      const messageToDelete = await models.Message.findByPk(req.params.id);
            
      if(req.user.isAdmin || (req.user.id == messageToDelete.userId)){
        console.log('message effacé');
        await  models.Message.destroy({ where: { id: messageToDelete.id }});
        res.status(201).json({
          message : 'Message effacé avec succés'
        });  
        
      }else{
        res.status(500).json({ 
          error : 'authorisation de supprimer le message refusée '
        }); 
      };     
    } catch (error) {
      return res.status(500).json({error: error.message});
    };
};
