import orderModel from "../models/orderModel.js";

const addOrder = async(req, res) => {
    try {
        const { fullName, phone, wilaya, commune, productName, quantity, status } = req.body;
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
            quantity,
            status
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


const updateOrder = async(req, res) => {
    try {
        // استلام المعرف (ID) من المعلمات
        const { id } = req.params;
        // استلام البيانات التي سيتم تحديثها من الجسم (req.body)
        const { status } = req.body;

        // البحث عن الطلب في قاعدة البيانات وتحديثه
        const updatedOrder = await orderModel.findByIdAndUpdate(
            id, // المعرف
            {
                status, // تحديث الحالة

            }, // ارجاع الوثيقة المحدثة
            // { new: true }
        );

        // التحقق إذا كان الطلب تم تحديثه بنجاح
        if (updatedOrder) {
            return res.json({ success: true, msg: 'تم تحديث الطلب بنجاح' });
        } else {
            return res.json({ success: false, msg: 'لا يمكن تحديث هذا الطلب' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: 'حدث خطأ أثناء التحديث' });
    }
};

export { addOrder, getAllOrders, deleteOrder, updateOrder };