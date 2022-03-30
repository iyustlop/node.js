const express = require("express");
const router = express.Router();
const autMiddleware = require("../middleware/session")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks")
const { getItem, getItems, createItem, updateItem, deleteItem } = require("../controllers/tracks");

/**
 * list items
 */
router.get("/",autMiddleware ,getItems);
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