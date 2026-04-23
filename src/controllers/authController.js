import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserService from "../services/userService.js";

const secret = process.env.JWT_SECRET;

export async function register (req, res) {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({ message:"Datos faltantes" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserService.create({
        email,
        password: hashedPassword
    });

    res.json({ message: "Usuario Creado." })
}

export async function login (req, res) {
    const { email, password } = req.body;

    const user = await UserService.findByEmail(email);

    if(!user){
        return res.status(400).json({
            message: "Credenciales Inválidas."
        })
    }

    const valid = await bcrypt.compare(password, user.password);

    if(!valid){
        return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const token = jwt.sign(
        {userId: user.id},
        secret,
        {expiresIn: "1h"}
    )

    res.json({ token });
}