const { handleHttpError } = require("../utils/handleError")
/**
 * Array con los roles permitidos
 * @param {*} rol 
 * @returns 
 */
const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        console.log({ user })
        const rolesByUSer = user.role;

        const checkValueRol = roles.some((rolSingle) => rolesByUSer.includes(rolSingle))
        if (!checkValueRol) {
            handleHttpError(res, "USER_NOT_PERMISSIONS", 403);
            return;
        }
        next();
    } catch (error) {
        handleHttpError(res, "ERROR_PERMISSION", 403)
    }
}

module.exports = checkRol