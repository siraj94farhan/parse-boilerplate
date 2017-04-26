import express from 'express';

import parse from '../config/parse';

const router = express.Router();

router.use('/hotify', parse);

router.get('/', (req, res) =>
  res.send('Server running!')
);

export default router;
