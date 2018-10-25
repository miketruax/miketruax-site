import {envValidator} from './config/env.conf.js';
import helmet from 'helmet';
envValidator();

import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';


import http from 'http';
let app = express();
let server = http.createServer(app);
let port = process.env.PORT;


if (process.env.NODE_ENV === 'development' ||
  process.env.NODE_ENV === 'test')
  app.use(morgan('dev'));


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/dist'));
app.use(helmet());




// catch 404 and forward to error handler
let router = express.Router();
import routes from './server/routes';
routes(app, router);

setInterval(function() {
  http.get("http://www.miketruax.com/api/ping");
}, 300000);

server.listen(port);


console.log(`Internet bears are at door #${port}`);

// Expose app
export {app};
