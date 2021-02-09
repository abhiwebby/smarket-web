import express from 'express';
import userCtrl from '../controllers/userCtrl.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);
router.get('/logout', userCtrl.logout);
router.get('/refresh_token', userCtrl.refreshToken);
router.get('/userinfo', auth, userCtrl.getUser);

export default router;
