import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export function authMiddleware (req, res, next) {
    const auth = req.headers.authorization;

    if(!auth){
        return res.status(401).json({ message: "token requerido." });
    }

    const token = auth.split(" ")[1];

    try{
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch(error) {
        return res.status(403).json({
            message: "Token Inválido."
        })
    }
}