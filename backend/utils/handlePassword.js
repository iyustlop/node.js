const bcryptjs = require("bcryptjs")

/**
 * Contraseña sin encryptar
 */
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10);
    return hash;

};

/**
 * Pasar contraseña sin encriptar y encripatada
 * 
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword)
};

module.exports = { encrypt, compare }