import './database';
import 'reflect-metadata';
import path from 'path';
import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(
  '/uploads/icons',
  express.static(path.resolve(__dirname, '..', 'uploads', 'icons')),
);

app.listen(3333, () => console.log('🧁 Backend is running'));
