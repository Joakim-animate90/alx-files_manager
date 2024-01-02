// server.js
import injectRoutes from './routes';
import startServer from './libs/boot';

const express = require('express');

const server = express();

injectRoutes(server);
startServer(server);

export default server;
