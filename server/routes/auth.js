import {Router} from "express";
import {register , user , getMe} from '../controllers/auth.js'

const router = new Router()

//Registration
router.post('/register', register)
//Login
router.post('/login', user)

//Get me
router.post('/me', getMe)

export default router