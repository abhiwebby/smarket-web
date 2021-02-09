import express from 'express';
import categoryCtrl from '../controllers/categoryCtrl.js';

const router = express.Router();

router.get('/category', categoryCtrl.getCategories);

export default router;
