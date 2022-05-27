const express = require("express");

const server = express();

const data = require("./data.js");

/* EndPoints */

server.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<h1>This api created for <a href='https://givemeidea.netlify.app'>https://givemeidea.netlify.app</a></h1>"
    );
});

server.get("/ideas/:category", (req, res) => {
  const { category } = req.params;
  res.status(200).json(data.find((item) => item.category === category));
});

server.get("/idea/:id", (req, res) => {
  const resp = data.map((category) =>
    category.data.filter((item) => item.id == req.params.id)
  );

  res.status(200).json(
    resp.find((e) => {
      return e != "";
    })
  );
});

server.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});
