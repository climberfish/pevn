import { Sequelize } from 'sequelize';
import databaseConfig from 'infra/config/database.config';

class Database {
  public connection: Sequelize;

  constructor() {
    this.connection = new Sequelize(databaseConfig);
  }
}

const database: Database = new Database();

export default database;
