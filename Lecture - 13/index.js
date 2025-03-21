const express = require(`express`);
const app = express();
const mongoose = require(`mongoose`);
const path = require(`path`);
const PORT = 3000;

(async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/AmaKart`);
    console.log(`Database connected successfully!!!`);
  } catch (error) {
    console.log(error);
  }
})();

app.use(express.urlencoded({ extended: true }));

app.use(require(`./Routes/productRoutes.js`));

app.use(express.static(path.resolve(__dirname, `views`)));

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working fine!!!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is working on http://127.0.0.1:${PORT}`);
});
