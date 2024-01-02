// server.js
import injectRoutes from './routes';
import startServer from './libs/boot';
import injectMiddlewares from './libs/middlewares';

const express = require('express');

const server = express();

injectMiddlewares(server);
injectRoutes(server);
startServer(server);

export default server;
