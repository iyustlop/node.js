const fs = require("fs")
const { matchedData } = require("express-validator");
const { storageModel } = require("../models");
const { handleHttpError } = require("../utils/handleError")

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

/**
 * obtener lista de la DB
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const data = await storageModel.find({})
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR GETTING ITEMS")
    }
};

/**
 * Obtener detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const data = await storageModel.findById(id)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR DETAIL ITEMS")
    }
};

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {

    try {
        const { body, file } = req
        console.log(file)
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        const data = await storageModel.create(fileData)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR CREATING STORAGE ITEM")
    }
};

/**
 * eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const dataFile = await storageModel.findById(id)
        await storageModel.deleteOne(id)
        const { filename } = dataFile
        const filepath = `${MEDIA_PATH}/${filename}`

        fs.unlinkSync(filepath)
        const data = {
            filepath,
            deleted: 1
        }

        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR DELETE ITEMS")
    }
};

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => { };

module.exports = { getItems, getItem, createItem, deleteItem, updateItem }