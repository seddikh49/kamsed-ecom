import express from 'express'
import { addOrder, getAllOrders, deleteOrder } from '../controller/orderController.js'



const orderRouter = express.Router()


orderRouter.post('/add', addOrder)
orderRouter.get('/list', getAllOrders)
orderRouter.delete('/delete/:id', deleteOrder)






export default orderRouter