/**
 * Created by 欧阳 超 on 2017/01/07.
 */

import express from 'express';

import route from './routes'

const app = express();

app.use(route);

app.listen(9000, () => {
});