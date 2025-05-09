import express from 'express'
import { loginUser, registerUser, adminLogin } from '../controller/userController.js'
import authAdmin from '../middleware/admin.js'



const userRouter = express.Router()




userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)
userRouter.post('/verify-token', authAdmin, (req, res) => {
    return res.json({ role: "admin", msg: 'Token verified seccussfully' })
})




export default userRouter