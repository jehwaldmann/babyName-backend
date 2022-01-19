const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { addUser } = require("../query/userQueries");
const { validateBody } = require("../middlewares/ajvValidation");
const { doesUserExistSignup } = require("../middlewares/doesUserExistSignup");
const { doPasswordsMatch } = require("../middlewares/doesPasswordMatch");
const { encryptPassword } = require("../middlewares/bcryptPassword");
const { doesUserExistLogin } = require("../middlewares/doesUserExistLogin");

const Schemas = require("../schemas/allSchemas");

router.post(
  "/signup",
  validateBody(Schemas.signUpSchema),
  doesUserExistSignup,
  doPasswordsMatch,
  encryptPassword,
  async (req, res) => {
    try {
    
      const { name, email, hashed_password, couple_key, partnerId } = req.body;
        if (partnerId){
      const user = await addUser(name, email, hashed_password, couple_key, partnerId);
      console.log(user);}

      const user = await addUser(name, email, hashed_password, couple_key);
      console.log(user);

      res.send("Signup Successful");
    } catch (err) {
      console.log(err);
    }
  }
);

router.post(
  "/login",
  validateBody(Schemas.loginSchema),
  doesUserExistLogin,
  async (req, res) => {
    try {
      const { email, password, user } = req.body;

      bcrypt.compare(password, user.password_hash, (err, result) => {
        if (err) {
          res.status(400).send("Incorrect Password");
          return;
        }
        if (result) {
          const token = jwt.sign({ userId: user.userId }, process.env.SECRET_KEY);
          res.send({ email, token });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
);

module.exports = router;
