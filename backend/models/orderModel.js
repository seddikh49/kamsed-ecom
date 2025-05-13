import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "الاسم الكامل مطلوب"],
    },
    phone: {
        type: String,
        required: [true, "رقم الهاتف مطلوب"],
        // validate: {
        //     validator: function(v) {
        //         return /^0\d{9}$/.test(v);
        //     },
        //     message: "رقم الهاتف يجب أن يبدأ بـ 0 ويتكون من 10 أرقام فقط",
        // },
    },

    wilaya: {
        type: String,
        required: [true, "الولاية مطلوبة"],
    },
    commune: {
        type: String,
        required: [true, "البلدية مطلوبة"],
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, "الكمية يجب أن تكون أكبر من صفر"],
    },
    productName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    notification: {
        type: Number,
        required: true,
    },
    // date: {
    //     type: Date,
    //     required: true,
    //     default: Date.now,
    // },
});

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;