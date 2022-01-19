const express = require("express");
const {
  getSavedBabyNames,
  addBabySavedName,
} = require("../query/savedBabyName");
const { checkToken } = require("../middlewares/checkToken");

const router = express.Router();

router.get("/", checkToken, async (req, res) => {
  const {userId} = req.body
  const allBabyNames = await getSavedBabyNames(userId);
  res.send(allBabyNames);
});


router.post("/savingName"), checkToken, async(req, res) => {
  try {
    const { userId, baby_name } = req.body;
    const baby = await addBabySavedName(baby_name, userId);
    console.log(baby);

    res.send("baby name added to list");
  } catch (err) {
    console.log(err);
  }
}

module.exports = router;
