import { Router } from 'express';
import userRouter from './user';
import imageRouter from './image';

// Export the base-router
const baseRouter = Router();

baseRouter.use('/', userRouter);
baseRouter.use('/', imageRouter);

export default baseRouter;
