const express = require("express");
const app = new express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.listen(3333, "127.0.0.1");