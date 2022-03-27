const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorGetItem = [
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        console.log("Validate tracks")
        return validateResults(req, res, next)
    }
];


module.exports = { validatorGetItem };