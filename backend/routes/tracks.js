const express = require("express");
const router = express.Router();
const { validatorCreateItem } = require("../validators/tracks")
const { getItem, getItems, createItem } = require("../controllers/tracks");

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", createItem);

module.exports = router