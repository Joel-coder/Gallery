import { Router } from 'express';
import userRouter from './user';


// Export the base-router
const baseRouter = Router();

baseRouter.use('/', userRouter);

export default baseRouter;
