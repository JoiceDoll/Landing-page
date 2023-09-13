import pg from "pg";

// const db = new pg.Client({
//   user: "postgres",
//   host: "localhost",
//   database: "postgres",
//   password: "alohomora",
//   port: 5432,
// });

const db = new pg.Client({
  user: process.env.USER_DATABASE,
  host: process.env.HOST_DATABASE,
  database: process.env.DATABASE,
  password: process.env.PASSWORD_DATABASE,
  port: 5432,
});

export default db;
