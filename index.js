const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const register = napp => {
  const app = express();

  app.use(bodyParser.json());
  app.use(
    cors({
      allowedHeaders: "Content-Range,Content-Type,Range,Authorization",
      exposedHeaders: "Content-Range"
    })
  );

  napp.locals.api = app;
};

const start = napp => {
  const port = process.env.PORT || 3000;
  napp.locals.api.listen(port, err => {
    if (err) {
      console.log(`failed to start listening on ${port}, err: ${err}`);
    } else {
      console.log(`listening on ${port}`);
    }
  });
};

module.exports = {
  register,
  start
};
