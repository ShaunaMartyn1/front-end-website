const app = require("express")();

const PORT = process.env.PORT || 8080;

app.get("", (req, res) => {
  res.send("Hello world");
});

