import Joi from 'joi';

export const orderValidationSchema = Joi.object({
    fullName: Joi.string()
        .required()
        .messages({
            'string.empty': 'الاسم الكامل مطلوب',
        }),

    phone: Joi.string()
        .pattern(/^0\d{9}$/)
        .required()
        .messages({
            'string.empty': 'رقم الهاتف مطلوب',
            'string.pattern.base': 'رقم الهاتف يجب أن يبدأ بـ 0 ويتكون من 10 أرقام فقط',
        }),

    wilaya: Joi.string()
        .required()
        .messages({
            'string.empty': 'الولاية مطلوبة',
        }),

    commune: Joi.string()
        .required()
        .messages({
            'string.empty': 'البلدية مطلوبة',
        }),

    quantity: Joi.number()
        .min(1)
        .required()
        .messages({
            'number.base': 'الكمية يجب أن تكون رقمًا',
            'number.min': 'الكمية يجب أن تكون أكبر من صفر',
            'any.required': 'الكمية مطلوبة',
        }),

    productName: Joi.string()
        .required()
        .messages({
            'string.empty': 'اسم المنتج مطلوب',
        }),

    status: Joi.string()
        .required()
        .messages({
            'string.empty': 'الحالة مطلوبة',
        }),

    notification: Joi.number()
        .required()
        .messages({
            'number.base': 'الإشعار يجب أن يكون رقمًا',
            'any.required': 'الإشعار مطلوب',
        }),

    // date: Joi.date().default(Date.now),
});