const express = require("express");
const {
  getSavedBabyNames,
  getPartnerSavedBabyNames,
  addBabySavedName,
} = require("../query/savedBabyName");
const { checkToken } = require("../middlewares/checkToken");

const router = express.Router();

router.get("/", checkToken, async (req, res) => {
  const allBabyNames = await getSavedBabyNames();
  res.send(allBabyNames);
});

router.get("/partnerMatch", checkToken, async (req, res) => {
  const allBabyNamesWithPartner = await getPartnerSavedBabyNames();
  res.send(allBabyNamesWithPartner);
});

router.put("/savingName"), checkToken, async(req, res) => {
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
