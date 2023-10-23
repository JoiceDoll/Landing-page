import { Pool } from "pg";

const db = new Pool({
  user: process.env.USER_DATABASE,
  host: process.env.HOST_DATABASE,
  database: process.env.DATABASE,
  password: process.env.PASSWORD_DATABASE,
  port: 5432,
});

export default db;
