import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from '../routes';
import httpErrorMiddleware from '../../middleware/http.error.middleware';
import '@shared/typeorm';

const app = express();
const port = 3000;

app.use(cors());
app.use(routes);
app.use(httpErrorMiddleware);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
