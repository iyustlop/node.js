const express = require("express");
const { matchedData } = require("express-validator");
const router = express.Router();
const { validatorLogin, validatorRegisterItem } = require("../validators/auth")
const { encrypt, compare } = require("../utils/handlePassword")
const { usersModel } = require("../models")

/**
 * 
 */
router.post("/register", validatorRegisterItem, async (req, res) => {
    req = matchedData(req);
    const password = await encrypt(req.password)
    const body = { ...req, password }
    const data = await usersModel.create(body);
    data.set("password", undefined, { strict: false })
    res.send({ data: data })
});

module.exports = router;