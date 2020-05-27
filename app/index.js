// import "babel-core/register";
// import "babel-polyfill";

import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';
import path from 'path';
import '../utils/passport';

const appDir = path.dirname(require.main.filename);
const app = express();

app.use('/static', express.static(appDir + '/public'));

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080, https://event-band-api.ru');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");

  next();
};
app.use(allowCrossDomain);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

export default app;
