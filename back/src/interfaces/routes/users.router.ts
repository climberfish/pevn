import { Router } from 'express';
import UserController from 'interfaces/controllers/users.controller';
import { checkJwt } from 'infra/web/auth/jwt';
import { checkRole, Role } from 'infra/web/auth/roles';

const router = Router();
const userController = new UserController();
const checkAdmin = [checkJwt, checkRole([Role.ADMIN])];

router.get('/', checkAdmin, userController.listAll);
router.post('/', checkAdmin, userController.newUser);
router.get('/:id([0-9]+)', checkAdmin, userController.getOneById);
router.patch('/:id([0-9]+)', checkAdmin, userController.editUser);
router.delete('/:id([0-9]+)', checkAdmin, userController.deleteUser);

export default router;
