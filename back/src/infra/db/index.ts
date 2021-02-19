import settings from 'infra/config/settings';
import { createConnection } from 'typeorm';

export default createConnection(settings.dbConfig).then(conn => {
  console.log('DB connected!');
  return conn;
});
