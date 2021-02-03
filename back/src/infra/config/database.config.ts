import { Options } from 'sequelize/types';

const dbConfig: Options = {
  dialect: 'postgres',
  host: process.env.DB_HOST || 'climberfish',
  username: process.env.DB_USER || 'climberfish',
  password: process.env.DB_PASS || 'climberfish',
  database: process.env.DB_NAME || 'climberfish',
  port: 5432,
  define: { timestamps: true },
};

export default dbConfig;
