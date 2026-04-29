import { body } from "express-validator";

export const createUserValidator = [
    body("email")
        .isEmail().withMessage("E-mail inválido")
        .normalizeEmail(),

    body("password")
        .isLength({ min: 6 }).withMessage("Mínimo 6 caracteres")
];