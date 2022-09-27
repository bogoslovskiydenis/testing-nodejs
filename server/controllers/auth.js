import User from '../models/User.js'
import bcrypt from 'bcryptjs'

//Register user
export const register = async (req, res) => {
    try {
        const {username, password} = req.body
        const isUsed = await User.findOne({username})
        if (isUsed) {
            return res.status(402).join({message: "Юзер занят"})
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = new User({
            username,
            password: hash,
        })

        await newUser.save()

        res.json({
            newUser, message: "регистрация успешная"
        })
    } catch (e) {
        res.json({message: 'Ошибка при регистрации'})
    }
}
//Login user
export const user = async (req, res) => {
    try {
    } catch (e) {

    }
}
//get profile
export const getMe = async (req, res) => {
    try {
    } catch (e) {

    }
}