import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { Server } from 'http';

let httpServer: Server;
const app = express();
app.use(morgan('common'));
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});
const start = (port: number = 4000) => {
  httpServer = app.listen(port, () => console.log(`Listening on ${port}...`));
};

const stop = () => {
  httpServer.close();
};

export const server = {
  app,
  start,
  stop,
};
