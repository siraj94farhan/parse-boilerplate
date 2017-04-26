import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import routes from '../routes';

const app = express();

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
};


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allowCrossDomain);
app.use('/public', express.static(path.join(__dirname, '/../public')));
app.use('/', routes);

export default app;
