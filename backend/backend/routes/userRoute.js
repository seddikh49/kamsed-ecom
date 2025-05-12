import express from 'express'
import { loginUser, registerUser, adminLogin } from '../controller/userController.js'
import authAdmin from '../middleware/admin.js'



const userRouter = express.Router()




userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)
userRouter.post('/verify-token', authAdmin, async(req, res) => {
    const { role, id } = req.user
    return res.json({ role, msg: 'Token verified seccussfully', id: id })
})




export default userRouter