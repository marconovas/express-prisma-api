import { body, param } from "express-validator";

export const createTaskvalidator = [
    body("title")
        .notEmpty().withMessage("Título Requerido")
        .trim(),
]

export const updateTaskValidator = [
    param("id")
        .isInt().withMessage("ID Inválido"),

    body("title")
        .optional()
        .trim(),

    body("completed")
        .optional()
        .isBoolean().withMessage("Debe ser Booleano.")
]

export const deleteTaskValidator = [
    param("id").isInt(),
    param("userId").isInt()
];