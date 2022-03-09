import { Request, Response, Router } from 'express';
import controller from '../controller/images';
import multer from "multer";
const upload = multer({dest: 'uploads/'})
const p = {
    get: '/images/get',
    post: '/images/post'
} as const;

const router = Router();

router.get(p.get, controller.getAllImages)

router.post(p.post,upload.single("imageFile"), controller.saveImages)


export default router;
