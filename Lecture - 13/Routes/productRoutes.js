const express = require(`express`);
const router = express.Router();
const {
  showAllProducts,
  showNewProductForm,
  addNewProduct
} = require(`../Controllers/productController.js`);

router.get(`/`, showAllProducts);

router.get(`/new`, showNewProductForm);

router.post(`/`, addNewProduct);

module.exports = router;
