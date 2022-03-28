const express = require("express");
const router = express.Router();
const { validatorRegisterItem, validatorLogin } = require("../validators/auth")
const { registerCtrl, loginCtrl } = require("../controllers/auth")


/**
 * 
 */
router.post("/register", validatorRegisterItem, registerCtrl);
router.post("/login", validatorLogin, loginCtrl);

module.exports = router;