import { Request, Response, Router } from 'express';
import {signIn, signUp} from '../controller/user';

const p = {
    get: '/get',
    post: '/post'
} as const;

const router = Router();

router.get(p.get, signIn)

router.post(p.post, signUp)


export default router;