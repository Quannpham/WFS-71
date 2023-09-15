import express from 'express';
import postRouter from './post.route.js';
import userRouter from './user.route.js';
import authRouter from './auth.route.js';
import authMiddleware from '../middlewares/auth.mdw.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/posts', authMiddleware, postRouter);
router.use('/users', userRouter);

export default router;