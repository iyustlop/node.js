const express = require("express");
const router = express.Router();
const autMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks")
const { getItem, getItems, createItem, updateItem, deleteItem } = require("../controllers/tracks");

/**
 * list items
 */
router.get("/", autMiddleware, checkRol(["admin"]), getItems);
/**
 * obtain detail item
 */
router.get("/:id", autMiddleware, validatorGetItem, getItem);
/**
 * create an item
 */
router.post("/", autMiddleware, checkRol(["admin"]), validatorCreateItem, createItem);
/**
 * update one register
 */
router.put("/:id", autMiddleware, validatorCreateItem, validatorCreateItem, updateItem);
/**
 * delete one item
 */
router.delete("/:id", autMiddleware, validatorGetItem, deleteItem);

module.exports = router