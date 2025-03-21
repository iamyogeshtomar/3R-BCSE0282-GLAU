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

module.exports = { addNewProduct, showAllProducts, showNewProductForm };
