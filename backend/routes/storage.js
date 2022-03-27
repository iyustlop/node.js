const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage")
const { createItem, getItems, getItem, deleteItem, updateItem } = require("../controllers/storage")
const { validatorGetItem } = require("../validators/storage")

/**
 * List of otems
 */
router.get("/", getItems)
/**
 * Detail of items
 */
router.get("/:id", validatorGetItem, getItem)
/**
 * Create Items
 */
router.post("/", uploadMiddleware.single("myfile"), createItem);
/**
 * update Item
 */
router.put("/:id", validatorGetItem, updateItem)
/**
 * Delete Items
 */
router.delete("/:id", validatorGetItem, deleteItem)


module.exports = router