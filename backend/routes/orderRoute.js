import express from 'express'
import { addOrder, getAllOrders, deleteOrder, updateOrder } from '../controller/orderController.js'



const orderRouter = express.Router()


orderRouter.post('/add', addOrder)
orderRouter.get('/list', getAllOrders)
orderRouter.delete('/delete/:id', deleteOrder)
orderRouter.put('/update/:id', updateOrder)






export default orderRouter