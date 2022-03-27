const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks")
const { getItem, getItems, createItem, updateItem, deleteItem } = require("../controllers/tracks");

/**
 * list items
 */
router.get("/", getItems);
/**
 * obtain detail item
 */
router.get("/:id", validatorGetItem, getItem);
/**
 * create an item
 */
router.post("/", validatorCreateItem, createItem);
/**
 * update one register
 */
router.put("/:id", validatorCreateItem, validatorCreateItem, updateItem);
/**
 * delete one item
 */
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router