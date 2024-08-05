import express from 'express';
import cors from 'cors';
import logger from 'morgan';



import indexRouter from './routes/index.js';



const app = express();


app.use(cors());
app.use(express.json());
app.use(logger('dev'));


app.use('/api/', indexRouter);

export default app;