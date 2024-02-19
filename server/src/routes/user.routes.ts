import { Router } from 'express';
import { loginHandler, signupHandler } from '../controllers/user.controller';
import { validate } from '../middlewares/validate.middleware';
import { createUserSchema, loginSchema } from '../schema/user.schema';

const router = Router();

router.post('/signup', [validate(createUserSchema)], signupHandler);
router.post('/login', [validate(loginSchema)], loginHandler);

export default router;
