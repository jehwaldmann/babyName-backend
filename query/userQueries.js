const { query } = require("../lib/db");

async function addUser(name, email, passwordHash, couple_key, partnerId) {
  try {
    const sql = partnerId
      ? `INSERT INTO user (name, email, hashed_password, couple_key, partnerId) VALUES ('${name}','${email}', '${passwordHash}', '${couple_key}','${partnerId}')`
      : `INSERT INTO user (name, email, hashed_password, couple_key) VALUES ('${name}','${email}', '${passwordHash}', '${couple_key}'`;
    const user = await query(sql);
    return user;
  } catch (err) {
    console.log(err);
  }
}

async function getUserByEmail(email) {
  try {
    const sql = `SELECT * FROM user WHERE email='${email}'`;
    const rows = await query(sql);
    return rows[0];
  } catch (err) {
    console.log(err);
  }
}

module.exports = { addUser, getUserByEmail };
