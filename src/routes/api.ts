import { Router } from 'express';
import userRouter from './image';


// Export the base-router
const baseRouter = Router();

baseRouter.use('/images', userRouter);


export default baseRouter;
