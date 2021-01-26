import express from "express";
const router = express.Router();
import { logIn, signUp, getUser, deleteUser, getAllUser, modifyUser } from "../controllers/user";
import auth from "../middleware/auth";

router.post('/signup', signUp);
router.post('/login', logIn);
router.get('/', auth, getAllUser);
router.get('/:id', auth, getUser);
router.delete('/delete/:id', auth , deleteUser);
router.patch('/update/:id', auth, modifyUser)

export default router;