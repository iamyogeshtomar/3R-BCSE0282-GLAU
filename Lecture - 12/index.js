const express = require(`express`);
const app = express();
const session = require(`express-session`);
const PORT = 3000;

app.use(
  session({
    secret: "guitarist tommy",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working fine!!!</h1>`);
});

app.get(`/another`, (req, res) => {
  console.log(req.session);
  res.send(`<h1>Another Route</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is working on http://127.0.0.1:${PORT}`);
});
