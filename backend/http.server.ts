import * as express from 'express';
import { createServer, Server } from 'http';
import * as cors from 'cors';

export class HttpServer {
  public static readonly PORT: number = 3000;
  private app: express.Application;
  private port: number | string;
  private server: Server;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || HttpServer.PORT;
    this.server = createServer(this.app);
    this.setup();
    this.listen();
  }

  getApp() {
    return this.app;
  }

  setup() {
    this.app.use(cors());
    this.app.use('/assets', express.static(__dirname + '/assets'));
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log('Running server on port %s', this.port);
    });
  }
}
