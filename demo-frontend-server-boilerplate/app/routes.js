/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

export default router;