import express from "express";
import { createMessage, getAllMessages, getOneMessage, modifyMessage, deleteMessage } from "../controllers/message";
import auth from "../middleware/auth";

const router = express.Router();

router.post('/', auth, createMessage);
router.get('/', auth, getAllMessages );
router.get('/id', auth, getOneMessage );
router.patch('/id', auth, modifyMessage);
router.delete('/id', auth, deleteMessage);




export default router;