const PORT = 8080;
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const limit = req.query.limit;

  const options = {
    method: "GET",
    url: `https://api.deezer.com/chart?limit=${limit}`,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.json(error);
    });
});

app.get("/search/track/", (req, res) => {
  const q = req.query.q;

  const options = {
    method: "GET",
    url: `https://api.deezer.com/search/track?q=${q}`,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.json(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
