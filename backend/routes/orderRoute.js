import express from 'express'
import { addOrder, getAllOrders } from '../controller/orderController.js'



const orderRouter = express.Router()


orderRouter.post('/add', addOrder)
orderRouter.get('/list', getAllOrders)





export default orderRouter