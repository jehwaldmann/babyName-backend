const express = require("express");
const { getSavedBabyNames, getPartnerSavedBabyNames } = require("../query/savedBabyName");
const { checkToken } = require("../middlewares/checkToken");

const router = express.Router();

router.get("/", checkToken, async (req, res) => {
  const allBabyNames = await getSavedBabyNames();
  res.send(allBabyNames);
});

router.get("/", checkToken, async (req, res) => {
  const allBabyNamesWithPartner = await getPartnerSavedBabyNames();
  res.send(allBabyNamesWithPartner);
});

module.exports = router;
