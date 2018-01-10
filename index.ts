import { NappJS, NappJSModule } from 'nappjs';

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

export default class NappJSApi extends NappJSModule {
  async load(napp: NappJS) {
    const app = express();

    app.use(bodyParser.json());
    app.use(
      cors({
        allowedHeaders: "Content-Range,Content-Type,Range,Authorization",
        exposedHeaders: "Content-Range"
      })
    );

    napp.locals.api = app;
  }

  async start(napp: NappJS){
    const port = process.env.PORT || 80;
    napp.locals.api.listen(port, err => {
      if (err) {
        console.log(`failed to start listening on ${port}, err: ${err}`);
      } else {
        console.log(`listening on ${port}`);
      }
    });
  }
}