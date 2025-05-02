import orderModel from "../models/orderModel.js";

const addOrder = async(req, res) => {
    try {
        const { fullName, phone, wilaya, commune, productName, quantity } = req.body;
        const orderData = await orderModel.findOne({ phone });
        if (orderData) {
            const msg = {}
            msg.message = "رقم الهاتف هذا تم الطلب به مسبقا "
            return res.json({ success: false, msg: msg });
        }
        const newOrder = new orderModel({
            fullName,
            phone,
            wilaya,
            commune,
            productName,
            quantity
        });
        const order = await newOrder.save();
        res.json({ success: true, msg: "تم طلب المنتج بنجاح " });
    } catch (error) {
        res.json({ success: false, msg: error })
    }
};

const getAllOrders = async(req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, order: orders })

    } catch (error) {
        console.log(error)
    }
}


const deleteOrder = async(req, res) => {
    try {
        const { id } = req.params
        const deletedOrder = await orderModel.findByIdAndDelete(id)
        if (deleteOrder) {
            return res.json({ success: true, msg: 'لقد تم حذف الطلب' })
        } else {
            res.json({ success: false, msg: "لا يمكنك هذا هذا الطلب" })
        }

    } catch (error) {
        console.log(error)
    }
}




export { addOrder, getAllOrders, deleteOrder };