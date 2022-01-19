const { query } = require("../lib/db");

async function getSavedBabyNames(userId) {
  try {
    const allBabyNames = await query(`SELECT * FROM saved_baby_name WHERE userId = ${userId}`);
    return allBabyNames;
  } catch (err) {
    console.error(err);
  }
}


async function addBabySavedName(baby_name, userId) {
  try {
    const allBabyNamesToList = await query(
      `INSERT INTO saved_baby_names (baby_name, userId) VALUES (${baby_name}, ${userId}`);
    return allBabyNamesToList;
  } catch (err) {
    console.error(err);
  }
}

module.exports = { getSavedBabyNames, addBabySavedName };