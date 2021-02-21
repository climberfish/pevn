import { Router } from 'express';
import UserController from 'interfaces/controllers/users.controller';

const router = Router();
const userController = new UserController();

router.get('/', (req, res) => userController.listAll(req, res));
router.post('/', (req, res) => userController.newUser(req, res));
router.get('/:id([0-9]+)', (req, res) => userController.getOneById(req, res));
router.patch('/:id([0-9]+)', (req, res) => userController.editUser(req, res));
router.delete('/:id([0-9]+)', (req, res) => userController.deleteUser(req, res));

export default router;
