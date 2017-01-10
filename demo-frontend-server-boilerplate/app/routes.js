/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import express from 'express';
import winston from 'winston';
import request from 'request';

const router = express.Router();

router.get('/', (req, res) => {
  winston.log('test');
  request.get('http://localhost:7000/', (_err, _res, _body) => {
    res.send(_body);
  });
});

export default router;