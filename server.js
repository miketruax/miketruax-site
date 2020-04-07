import {envValidator} from './server/config/env.conf.js';
import helmet from 'helmet';
envValidator();

import express from 'express';
import routes from './server/routes';
import bodyParser from 'body-parser';


import http from 'http';
let app = express();
let server = http.createServer(app);
let port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/dist'));

app.use(helmet());




// catch 404 and forward to error handler
let router = express.Router();

routes(app, router);
app.get("*", (req, res) =>
  res.sendFile("/dist/index.html", { root: __dirname + "/" })
);

server.listen(port);

console.log(`Internet bears are at door #${port}`);