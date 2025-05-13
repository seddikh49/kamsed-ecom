import { orderValidationSchema } from "../validator/validate.js";
import orderModel from "../models/orderModel.js";

// const addOrder = async(req, res) => {

//     try {
//         const { fullName, phone, wilaya, commune, productName, quantity, status, notification } = req.body;
//         const orderData = await orderModel.findOne({ phone });
//         if (orderData) {
//             const msg = {}
//             msg.message = "رقم الهاتف هذا تم الطلب به مسبقا "
//             return res.json({ success: false, msg: msg });
//         }
//         const newOrder = new orderModel({
//             fullName,
//             phone,
//             wilaya,
//             commune,
//             productName,
//             quantity,
//             status,
//             notification
//         });
//         const order = await newOrder.save();
//         res.json({ success: true, msg: "تم طلب المنتج بنجاح " });
//     } catch (error) {
//         res.json({ success: false, msg: error })
//     }
// };

const addOrder = async(req, res) => {
    // Validate request body
    const { error, value } = orderValidationSchema.validate(req.body, {
        stripUnknown: true, // إزالة الحقول الغير معروفة
        abortEarly: false, // عرض جميع الأخطاء
    });


    if (error) {
        return res.status(400).json({
            success: false,
            message: 'خطأ في التحقق من البيانات',
            message: error.details[0].message
        });
    }

    try {
        const newOrder = new orderModel(value); // Use validated value
        const order = await newOrder.save();
        res.status(201).json({
            success: true,
            message: 'تم طلب المنتج بنجاح',
        });
    } catch (error) {

        res.status(500).json({
            success: false,
            message: 'حدث خطأ أثناء حفظ الطلب',
            error: error.message
        });
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
        const { status, notification } = req.body;


        // البحث عن الطلب في قاعدة البيانات وتحديثه
        const updatedOrder = await orderModel.findByIdAndUpdate(
            id, // المعرف
            {
                status

            }, // ارجاع الوثيقة المحدثة
            // { new: true }
        );

        // التحقق إذا كان الطلب تم تحديثه بنجاح
        if (updatedOrder) {
            return res.json({ success: true, msg: 'تم تحديث الطلب بنجاح', status: status });
        } else {
            return res.json({ success: false, msg: 'لا يمكن تحديث هذا الطلب' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: 'حدث خطأ أثناء التحديث' });
    }
};



const updateAllNotifications = async(req, res) => {
    try {
        // تحديث جميع الطلبات وجعل notification 0
        const result = await orderModel.updateMany({}, // بدون فلتر، يعني سيتم تحديث جميع الطلبات
            { $set: { notification: 0 } } // تعيين notification إلى 0 لجميع الطلبات
        );

        if (result.modifiedCount > 0) {
            res.json({ success: true, msg: "تم تحديث جميع الإشعارات بنجاح" });
        } else {
            res.json({ success: false, msg: "لا توجد طلبات لتحديثها" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: "حدث خطأ أثناء التحديث" });
    }
}

export { addOrder, getAllOrders, deleteOrder, updateOrder, updateAllNotifications };