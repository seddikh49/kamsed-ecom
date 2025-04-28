import orderModel from "../models/orderModel.js";

const addOrder = async(req, res) => {
    try {
        const { fullName, phone, wilaya, commune, productName, quantity } = req.body;
        const orderData = await orderModel.findOne({ phone });
        if (orderData) {
            return res.json({ success: false, msg: "رقم الهاتف هذا تم الطلب به مسبقا " });
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
        console.log(error);
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




export { addOrder, getAllOrders };