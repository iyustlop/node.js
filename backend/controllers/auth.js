const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword")
const { usersModel } = require("../models")
const { tokenSign } = require("../utils/handleJwt")
const { handleHttpError } = require("../utils/handleError")


/**
 * Este controlador es el encargo de registar un usuario
 */
const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const password = await encrypt(req.password)
        const body = { ...req, password }
        const dataUser = await usersModel.create(body);
        dataUser.set("password", undefined, { strict: false })

        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }

        res.send({ data })
    } catch (error) {
        handleHttpError(res, `Error register user: ${error}`)
    }
}

/**
 * Este controlador es el encargado de logear
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        console.log(req)
        const user = await usersModel.findOne({ email: req.email }).select('password name role email');
        if (!user) {
            handleHttpError(res, "USER_NOT_EXIST", 404)
            return
        }
        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword)
        if (!check) {
            handleHttpError(res, "PASSWORD_INVALID", 401)
            return
        }

        user.set('password', undefined, { strict: false })
        const data = {
            token: await tokenSign(user),
            user
        }
        res.send(data)

    } catch (error) {
        handleHttpError(res, "Error login user")
    }
}

module.exports = { registerCtrl, loginCtrl }