import express from 'express';
import categoryCtrl from '../controllers/categoryCtrl.js';
import auth from '../middlewares/auth.js';
import authAdmin from '../middlewares/authAdmin.js';

const router = express.Router();

router.get('/category', categoryCtrl.getCategories);
router.post('/category', auth, authAdmin, categoryCtrl.createCategory);
router.delete('/category/:id', auth, authAdmin, categoryCtrl.deleteCategory);
router.put('/category/:id', auth, authAdmin, categoryCtrl.updateCategory);

export default router;
