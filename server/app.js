import express from 'express';
import cors from 'cors';
import logger from 'morgan';



import indexRouter from './routes/index.js';
import getRouter from './routes/getRig.js';
import getRigByModelRouter from './routes/getRigByModel.js';
import getRigByIdRouter from './routes/getRigById.js';
import createRigRouter from './routes/createRig.js';
import updateRigRouter from './routes/updateRig.js';
import deleteRigRouter from './routes/deleteRig.js';
import apiExternaRouter from './routes/apiExterna.js';


const app = express();


app.use(cors());
app.use(express.json());
app.use(logger('dev'));


app.use('/api/', indexRouter);
app.use('/api/getRig', getRouter);
app.use('/api/getRigByModel', getRigByModelRouter);
app.use('/api/getRigById', getRigByIdRouter);
app.use('/api/createRig', createRigRouter);
app.use('/api/updateRig', updateRigRouter);
app.use('/api/deleteRig', deleteRigRouter);
app.use('/apiexterna', apiExternaRouter);

export default app;