import userModel from "../models/userModel.js"

const addToCart = async(req, res) => {
    try {
        const { userId, itemId, size } = req.body

        const userDate = userModel.findById(userId)
        let cartData = userDate.cartData
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
    } catch (error) {
        console.log(error)

    }

}


const updateCart = async(req, res) => {

}


const getUserCart = async(req, res) => {

}

export { addToCart, updateCart, getUserCart }