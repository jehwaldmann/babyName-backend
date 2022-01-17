const mysql = require("mysql2");
const path = require("path");
const Postgrator = require("postgrator");
require("dotenv").config();

const postgrator = new Postgrator({
  migrationDirectory: path.resolve(__dirname, "./migrations"),
  driver: "mysql2",
  host: "127.0.0.1",
  port: 3306,
  database: "baby_name",
  username: "root",
  password: process.env.SQL_PASSWORD,
  schemaTable: "migrations",
});
exports.postgrator = postgrator;

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: process.env.SQL_PASSWORD,
  database: "baby_name",
});
exports.pool = pool;

function query(sql) {
  return new Promise((resolve, reject) => {
    pool.query(sql, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}
exports.query = query;
