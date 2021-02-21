import User from 'domain/models/user.entity';
import { getRepository, Repository } from 'typeorm';

// const UserRepository = getRepository(User);
// export default UserRepository;

export default class UserRepository extends Repository<User> {
  constructor () {
    super();
    console.log((this));
  }
}
