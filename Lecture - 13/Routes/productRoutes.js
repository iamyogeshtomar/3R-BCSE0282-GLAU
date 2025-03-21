const express = require(`express`);
const router = express.Router();
const {
  showAllProducts,
  showNewProductForm,
  addNewProduct,
  showSingleProduct,
  showProductEditForm,
  updateProduct,
} = require(`../Controllers/productController.js`);

router.get(`/`, showAllProducts);

router.get(`/new`, showNewProductForm);

router.post(`/`, addNewProduct);

router.get(`/:productId`, showSingleProduct);

router.get(`/:productId/edit`, showProductEditForm);

router.put(`/:productId`, updateProduct);

module.exports = router;
