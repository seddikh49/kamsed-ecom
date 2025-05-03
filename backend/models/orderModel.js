import mongoose, { Schema } from 'mongoose'

const orderSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'الاسم الكامل مطلوب'],
    },
    phone: {
        type: String,
        required: [true, 'رقم الهاتف مطلوب'],
    },
    wilaya: {
        type: String,
        required: [true, 'الولاية مطلوبة']

    },
    commune: {
        type: String,
        required: [true, 'البلدية مطلوبة']
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, 'الكمية يجب أن تكون أكبر من صفر']
    },
    productName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },

})

const orderModel = mongoose.model("order", orderSchema)

export default orderModel