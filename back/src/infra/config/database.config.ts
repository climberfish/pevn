import { ConnectionOptions } from 'typeorm';

const dbConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '15432', 10),
  username: process.env.DB_USER || 'climberfish',
  password: process.env.DB_PASS || 'climberfish',
  database: process.env.DB_NAME || 'climberfish',
  entities: ['src/domain/models/**/*.ts'],
  migrations: ['src/infra/db/migrations/**/*.ts'],
  synchronize: true,
  logging: false,
};

export default dbConfig;
