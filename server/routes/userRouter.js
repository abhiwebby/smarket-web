import express from 'express';
import { addUser } from '../controllers/userCtrl.js';

const router = express.Router();

router.post('/register', addUser);

export default router;
