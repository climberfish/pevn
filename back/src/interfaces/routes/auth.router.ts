import { Router } from 'express';
import AuthController from 'interfaces/controllers/auth.controller';
import { checkJwt } from 'infra/web/auth/jwt';

const router = Router();
const authController = new AuthController();

router.post('/login', authController.login);
router.post('/change-password', [checkJwt], authController.changePassword);

export default router;
