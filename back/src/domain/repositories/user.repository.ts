import User from 'domain/models/user.entity';
import { Repository } from 'typeorm';

export default class UserRepository extends Repository<User> {
  async getById(id: number): Promise<User | undefined> {
    return User.findOne({ where: { id } });
  }
}
