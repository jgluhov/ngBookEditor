import * as express from 'express';
import { createServer, Server } from 'http';

export class HttpServer {
  public static readonly PORT: number = 3000;
  private app: express.Application;
  private port: number | string;
  private server: Server;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || HttpServer.PORT;
    this.server = createServer(this.app);
    this.listen();
  }

  getApp() {
    return this.app;
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log('Running server on port %s', this.port);
    });
  }
}
