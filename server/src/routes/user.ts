import { Request, Response, Router } from 'express';
import {signIn, signUp} from '../controller/user';

const p = {
    signIn: '/signin/post',
    signUp: '/signup/post'
} as const;

const router = Router();

router.post(p.signIn, signIn)

router.post(p.signUp, signUp)

export default router;