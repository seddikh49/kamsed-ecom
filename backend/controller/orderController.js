import orderModel from "../models/orderModel.js";

const addOrder = async(req, res) => {
    try {
        const { fullName, phone, state, commune } = req.body;
        const orderData = await orderModel.findOne({ phone });
        if (orderData) {
            return res.json({ msg: "you have been ordered this before" });
        }
        const newOrder = new orderModel({
            fullName,
            phone,
            state,
            commune,
        });
        const order = await newOrder.save();
        res.json({ success: true, msg: "you successfuly ordered" });
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