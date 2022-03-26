const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader")
const { validatorCreateItem } = require("../validators/tracks")
const { getItem, getItems, createItem } = require("../controllers/tracks");

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", validatorCreateItem, customHeader, createItem);

module.exports = router