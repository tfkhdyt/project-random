const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Taufik",
      email: "tfkhdyt@pm.me",
    },
    {
      nama: "Fauzi",
      email: "fauzi@pm.me",
    },
    {
      nama: "Doni",
      email: "doni@pm.me",
    },
  ];
  res.render("index", {
    layout: "layouts/main-layout",
    title: "Home",
    mahasiswa,
  });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | Listening at http://localhost:${port}`);
});
