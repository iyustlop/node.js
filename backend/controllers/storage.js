const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * obtener lista de la DB
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({})
    res.send({ data })
};

/**
 * Obtener detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {
    const data = ["hola", "solo"]

    res.send({ data })
};

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const { body, file } = req
    console.log(file)
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({ data })
};

/**
 * eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => { };

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItems = (req, res) => { };

module.exports = { getItems, getItem, createItem, deleteItem, updateItems }