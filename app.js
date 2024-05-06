const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const abURI = require("./database/MongoDb");

// express app
const app = express();

// Register view Engine
app.set("view engine", "ejs");

// Connect to MongoDB
mongoose
  .connect(abURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// Middleware and Static Files
app.use(express.static("style"));
app.use(express.urlencoded({ extended: true }));

// home page
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// blog routes
app.use("/blogs", blogRoutes);

// about page
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
