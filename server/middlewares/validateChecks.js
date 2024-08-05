import validationResult from 'express-validator'

const validateChecks = (req, res, next) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {

        res.status(400).json(errors)

    }else {

        next()
    }

}
export default validateChecks