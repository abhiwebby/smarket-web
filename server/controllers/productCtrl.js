import Products from '../models/productModel.js';

const productCtrl = {
  getProducts: async (req, res) => {
    try {
      const products = await Products.find();
      res.status(400).json(products);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createProduct: async (req, res) => {
    try {
      const {
        product_id,
        title,
        price,
        description,
        content,
        images,
        category,
      } = req.body;
      if (!images) {
        return res.status(400).json({ msg: 'no image upload' });
      }

      const product = await Products.findOne({ product_id });
      if (product) {
        return res.status(400).json({ msg: 'this product already exist' });
      }

      const newProduct = new Products({
        product_id,
        title: title.toLowerCase(),
        price,
        description,
        content,
        images,
        category,
      });

      await newProduct.save();

      res.json({ msg: 'new product created' });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Products.findByIdAndDelete(req.params.id);
      res.json({ msg: 'product deleted' });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const {
        product_id,
        title,
        price,
        description,
        content,
        images,
        category,
      } = req.body;
      if (!images) {
        return res.status(400).json({ msg: 'no image upload' });
      }

      await Products.findOneAndUpdate(
        { _id: req.params.id },
        {
          product_id,
          title: title.toLowerCase(),
          price,
          description,
          content,
          images,
          category,
        }
      );

      res.json({ msg: 'product updated' });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export default productCtrl;
