const Product = require(`../Schemas/productSchema.js`);

const showAllProducts = async (req, res) => {
  const allProducts = await Product.find();
  res.render(`homepage.ejs`, { allProducts });
};

const showNewProductForm = (req, res) => {
  res.render(`newProductForm.ejs`);
};

const addNewProduct = async (req, res) => {
  const { name, price, description, category } = req.body;
  await Product.create({
    name,
    price,
    description,
    category,
  });
  res.redirect(`/`);
};

const showSingleProduct = async (req, res) => {
  const singleProduct = await Product.findById(req.params.productId);
  res.render(`showSingleProduct.ejs`, { singleProduct });
};

const showProductEditForm = async (req, res) => {
  const oldProduct = await Product.findById(req.params.productId);
  res.render(`showProductEditForm.ejs`, { oldProduct });
};

const updateProduct = async (req, res) => {
  const { name, price, description, category } = req.body;
  await Product.findByIdAndUpdate(req.params.productId, {
    name,
    price,
    description,
    category,
  });
  res.redirect(`${req.params.productId}`);
};

module.exports = {
  addNewProduct,
  showAllProducts,
  showNewProductForm,
  showSingleProduct,
  showProductEditForm,
  updateProduct,
};
