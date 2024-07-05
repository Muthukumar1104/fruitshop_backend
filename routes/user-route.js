const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { requestHandler } = require("../utils/common");
const AuthService = require("../controllers/userController");

const authservice = new AuthService();

router.post(
  "/register",
  [
    check("name").isEmpty().withMessage("User name is required"),
    check("email").isEmpty().withMessage("Email is required"),
    check("password").isEmpty().withMessage("Password is required"),
    check("shop").isEmpty().withMessage("Shop name is required"),
  ],
  (req, res) => {
    const error = validationResult(req).array();
    console.log(error);
    if (error.length) {
      requestHandler(error, true, (err_message) => {
        return res.status(403).json(err_message);
      });
    } else {
      return authservice.userRegister(req, res);
    }
  }
);

module.exports = router;
