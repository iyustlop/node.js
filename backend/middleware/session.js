const { handleHttpError } = require("../utils/handleError")
const { verifyToken } = require("../utils/handleJwt")
const { usersModel } = require("../models")

const autMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, "NO_TOKEN", 401)
            return
        }
        const token = req.headers.authorization.split(' ').pop()
        const dataToken = await verifyToken(token)

        if (!dataToken._id) {
            handleHttpError(res, "ERROR_ID_TOKEN", 401)
            return
        }

        const user = await usersModel.findById(dataToken._id)
        req.user = user

        next()

    } catch (error) {
        handleHttpError(res, "NO_SESSION", 401)
    }
}

module.exports = autMiddleware;