import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const secretKey = process.env.JWT_SECRET

export const validateJWT = (req, res, next) => {
    const token = req.headers.token
    if (!token) {
        return res.status(401).json({ ok: false, msg: 'No token provided' })
    }
    try {
        const decoded = jwt.verify(token, secretKey)
        req.user = decoded
        next()
    } catch (err) {
        return res.status(401).json({ ok: false, msg: 'Invalid token' })
    }
}