import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { wilayas } from "../‏‏assets/frontend_assets/wilayas";
import { communes } from "../‏‏assets/frontend_assets/communes";
import products from "../‏‏assets/frontend_assets/assets";


export const ShopContext = createContext()



const ShopContextProvider = ({ children }) => {
    const currency = "دج"
    const delivery_fee = 10
    const backend_url  = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)
    const [searchBar, setSearchBar] = useState(false);
    const [takeItem, setTakeItem] = useState({});
    // const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate()



    const addCart = (itemId, size) => {
        if (size === undefined) {
            return toast.error('Choose Product size ')
        }

        const newItem = structuredClone(takeItem)
        if (newItem[itemId]) {
            if (newItem[itemId][size]) {
                newItem[itemId][size] += 1
            } else {
                newItem[itemId][size] = 1
            }
        } else {
            newItem[itemId] = {}
            newItem[itemId][size] = 1
        }
        setTakeItem(newItem)
        countOfCarts()
    }

    const countOfCarts = () => {
        let itemCount = 0
        for(const items in takeItem){
            for(const item in takeItem[items]){
                    if(takeItem[items][item] > 0){
                        itemCount += takeItem[items][item]
                } 
            }
        }
        return itemCount
    }
    

    const getCartAmount = () => {
        let cartAmount = 0
        for(let items in takeItem){
            let productCart = products.filter((product) => product._id === items)
            for(const item in takeItem[items]){
                if(takeItem[items][item] > 0){
                    cartAmount += productCart[0].price * takeItem[items][item]
                }
            }
        }
        return cartAmount  
    }


    const updateCart = (id, size,quantity) => {
        const updatedCart = { ...takeItem }; // Copy the original object to avoid direct mutation
        updatedCart[id][size] = quantity
        setTakeItem(updatedCart)
    }

    const getProducts = async () => {
        // try {
        //     const response = await axios.get(`${backend_url}api/product/list`)        
        //     if(response.data.msg){
        //         setProducts(response.data.products)
        //     }else{
        //         toast.error('there no data here')
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
    
    }

    useEffect(() => {
        getProducts()
        if(!token && localStorage.getItem('token')){
              setToken(localStorage.getItem('token'))
        }
    }, []);


    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        searchBar,
        setSearchBar,
        addCart,
        takeItem,
        updateCart,
        countOfCarts,
        getCartAmount,
        backend_url,
        token,
        setToken,
        navigate,
        setTakeItem,
        wilayas,
        communes,
        showSearch
    }


    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider