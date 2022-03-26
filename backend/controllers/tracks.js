const { tracksModel } = require("../models")


/**
 * obtener lista de la DB
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await tracksModel.find({})
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
    const { body } = req
    const data = await tracksModel.create(body)
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