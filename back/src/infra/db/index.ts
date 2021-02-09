import dbConfig from 'infra/config/database.config';
import { createConnection } from 'typeorm';

export default createConnection(dbConfig).then(conn => {
  console.log('DB connected!');
  return conn;
});
