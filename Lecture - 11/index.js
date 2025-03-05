const express = require(`express`);
const app = express();
const cookieParser = require(`cookie-parser`);
const PORT = 3000;

app.use(cookieParser());

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working fine!!!</h1>`);
});

app.get(`/cookies/:name/:place`, (req, res) => {
  const { name, place } = req.params;
  res.cookie("name", name);
  res.cookie("place", place);
  res.cookie("isLoggedIn", "false");
  res.send(`<h1>Cookies stored!!!</h1>`);
});

app.get(`/showCookies`, (req, res)=>{
    const cookies = req.cookies;
    res.send(`<h1>name:${cookies.name}, place:${cookies.place}</h1>`);
})

app.listen(PORT, () => {
  console.log(`Server is working on http://127.0.0.1:${PORT}`);
});
