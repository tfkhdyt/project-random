const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const app = express();
const port = 3000;

const {
  loadTanaman,
  findTanaman,
  cekDuplikat,
  addTanaman,
  deleteTanaman,
  updateTanaman,
} = require("./utils/tanaman");

// View engine setup
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: {
      expires: new Date(Date.now() + 60 * 60000),
    },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

let sess;

app.get("/", function (req, res) {
  sess = req.session;
  if (sess.loggedin) {
    return res.redirect("/dashboard");
  }
  res.render("login", {
    belumLogin: req.flash("msg"),
    out: req.flash("out"),
  });
});

app.get("/dashboard", (req, res) => {
  sess = req.session;
  const tanamans = loadTanaman();
  if (sess.loggedin || req.query.add || req.query.hapus || req.query.ubah) {
    sess.loggedin = true;
    res.render("dashboard", {
      tanamans,
      msg: req.flash("msg"),
    });
  } else {
    req.flash("msg", "Anda harus login terlebih dahulu!");
    res.redirect("/");
  }
});

app.post("/dashboard", (req, res) => {
  sess = req.session;
  addTanaman(req.body, () => {
    sess.loggedin = true;
    req.flash("msg", "Data berhasil ditambah!");
    res.redirect("/dashboard?add=true");
  });
});

app.get("/hapus/:kode", (req, res) => {
  const tanaman = findTanaman(req.params.kode);
  if (!tanaman) {
    res.status(404);
    res.send("<h1>404</h4>");
  } else {
    deleteTanaman(req.params.kode);
    sess.loggedin = true;
    req.flash("msg", "Data berhasil dihapus!");
    res.redirect("/dashboard?hapus=true");
  }
});

app.get("/ubah/:kode", (req, res) => {
  const tanaman = findTanaman(req.params.kode);
  console.log(tanaman);
  res.render("ubah-tanaman", {
    tanaman,
  });
});

app.post("/ubah/update", (req, res) => {
  updateTanaman(req.body);
  req.flash("msg", "Data berhasil diubah!");
  res.redirect("/dashboard?ubah=true");
});

app.post("/", (req, res) => {
  sess = req.session;
  const username = req.body.username;
  const password = req.body.password;

  if (username === "taufik") {
    if (password === "hidayat") {
      sess.username = username;
      sess.password = password;
      sess.loggedin = true;
      res.redirect("/dashboard");
    } else {
      req.flash("msg", "Password salah!");
      res.render("login", {
        msg: req.flash("msg"),
      });
    }
  } else {
    console.log("Username salah");
    req.flash("msg", "Username salah!");
    res.render("login", {
      msg: req.flash("msg"),
    });
  }
});

app.get("/add", (req, res) => {
  sess = req.session;
  sess.loggedin = true;
  res.render("add-tanaman");
});

app.get("/logout", (req, res) => {
  res.redirect("/");
  req.session.destroy((err) => {
    if (err) {
      return console.log(err);
    }
  });
});

app.use('/', (req, res) => {
  res.status(404)
  res.send('<h1>404</h1>')
})

app.listen(port, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});
