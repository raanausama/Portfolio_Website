const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "Nashit0124",
  host: "localhost",
  port: 5432,
  database: "portfolio",
});

module.exports = pool;
