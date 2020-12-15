import express from "express";
const router = express.Router();
import { logIn, signUp, getUser, deleteUser } from "../controllers/user";
import auth from "../middleware/auth";

router.post('/signup', signUp);
router.post('/login', logIn);
router.get('/profile', auth, getUser)
router.patch('/profile', auth, getUser)
//router.delete('/profile', auth, modifyUser)

export default router;