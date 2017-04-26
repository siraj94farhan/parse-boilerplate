import express from 'express';

import * as config from './config';
import app from './config/express';

const port = process.env.PORT || config.PORT;

const httpServer = require('http').createServer(app);
httpServer.listen(port, () => {
  console.log(`hotify running on port ${port}.`);
});
