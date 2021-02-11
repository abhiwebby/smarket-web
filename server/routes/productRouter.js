import express from 'express';
import productCtrl from '../controllers/productCtrl.js';

const router = express.Router();

router.get('/products', productCtrl.getProducts);
router.post('/products', productCtrl.createProduct);
router.delete('/products/:id', productCtrl.deleteProduct);
router.put('/products/:id', productCtrl.updateProduct);

export default router;
