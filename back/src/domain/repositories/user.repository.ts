import User from 'domain/models/user.entity';
import { Repository } from 'typeorm';

export default class UserRepository extends Repository<User> {}
