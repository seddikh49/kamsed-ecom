import mongoose, { Schema } from 'mongoose'

const orderSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    commune: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true,
        default: Date.now
    },

})

const orderModel = mongoose.model("order", orderSchema)

export default orderModel