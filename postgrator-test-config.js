/* eslint-disable strict */
require('dotenv').config();

module.exports = {
  migrationDirectory: 'migrations',
  driver: 'pg',
  host: process.env.TEST_MIGRATION_DATABASE_HOST,
  port: process.env.TEST_MIGRATION_DATABASE_PORT,
  database: process.env.TEST_MIGRATION_DATABASE_NAME,
  username: process.env.TEST_MIGRATION_DATABASE_USER,
  password: process.env.TEST_MIGRATION_DATABASE_PASS
};