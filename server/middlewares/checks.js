import { check } from 'express-validator'

const checks = [

    check ('brand')
        .notEmpty().withMessage('El campo marca es obligatorio')
        .isString().withMessage('El campo marca debe ser un texto'),

    check ('model')
        .notEmpty().withMessage('El campo modelo es obligatorio')
        .isString().withMessage('El campo modelo debe ser un texto alfanumerico'),

    check ('type')
        .notEmpty().withMessage('El campo tipo es obligatorio')
        .isString().withMessage('El campo tipo debe ser un texto'),

    check ('frecuencyRange')
        .notEmpty().withMessage('El campo rango de frecuencia es obligatorio')
        .isString().withMessage('El campo rango de frecuencia debe ser un texto'),

    check ('mode')
        .notEmpty().withMessage('El campo modo es obligatorio')
        .isString().withMessage('El campo modo debe ser un texto'),

    check ('powerSupply')
        .notEmpty().withMessage('El campo alimentacion es obligatorio')
        .isString().withMessage('El campo alimentacion debe ser un texto'),

    check ('manufactured')
        .notEmpty().withMessage('El campo fabricado es obligatorio')
        .isString().withMessage('El campo fabricado debe ser un texto'),

    check ('img')
        .notEmpty().withMessage('El campo imagen es obligatorio')
        .isString().withMessage('El campo imagen debe ser un texto'),

]

export default checks