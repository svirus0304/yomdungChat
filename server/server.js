const express = require("express");
const app = express();
const cors = require("cors");
const stableDiffusionApi = require("./StableDiffusion/stableDiffusionApi.js");
const corsOptions = require("./cors/corsOptions.js");

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hi");
});

app.post("/stablediffusion", (req, res) => {
  stableDiffusionApi(req.body, (error, response) => {
    error ? res.send(error) : res.send(response);
  });
});

app.listen(8000);
