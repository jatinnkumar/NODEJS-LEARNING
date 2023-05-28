const { application } = require('express');
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();

// We use express.static for serving static html page
// const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, "../tempelates/views");
const partialsPath = path.join(__dirname, "../tempelates/partials");
// app.use(express.static(staticPath));

// set the view engine for dynamic page
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);
app.get("/", (req, res) => {
    // res.send("hello from the express");
    // Or we can also use html tags in res.send()
    // res.send("<h1>hello from the express</h1>");


    // For dynamic html page
    res.render("index", {
        name: "Test",
    });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/about/*", (req, res) => {
    res.render("error", {
        errorMessage: "This page is not available in about route..."
    });
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("*", (req, res) => {
    res.render("error", {
        errorMessage: "This page is not available.."
    });
});

app.listen(9000, () => {
    console.log('Listening the port at 9000.');
});

