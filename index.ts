import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as core from 'express-serve-static-core';
import { NappJS, NappJSService } from 'nappjs';

export default class NappJSApi extends NappJSService {
  public app: core.Express;

  constructor() {
    super();

    const app = express();

    app.use(bodyParser.json());
    app.use(
      cors({
        allowedHeaders: "Content-Range,Content-Type,Range,Authorization",
        exposedHeaders: "Content-Range"
      })
    );

    this.app = app;
  }

  async start(napp: NappJS) {
    const port = process.env.PORT || 80;
    this.app.listen(port, err => {
      if (err) {
        console.log(`failed to start listening on ${port}, err: ${err}`);
      } else {
        console.log(`listening on ${port}`);
      }
    });
  }
}
