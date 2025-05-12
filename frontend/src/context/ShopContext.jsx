import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { wilayas } from "../‏‏assets/frontend_assets/wilayas";
import { communes } from "../‏‏assets/frontend_assets/communes";



export const ShopContext = createContext()



const ShopContextProvider = ({ children }) => {
    const currency = "دج"
    const delivery_fee = 10
    const backend_url  = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)
    const [searchBar, setSearchBar] = useState(false);
    const [takeItem, setTakeItem] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate()
    const [nameConfirmation, setnameConfirmation] = useState();
    const [fullName, setfullName] = useState('');
    const [phone, setPhone] = useState('');
    const [wilaya, setWilaya] = useState('');
    const [commune, setCommune] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [productName, setProductName] = useState();
     const [deliveryPrice, setdeliveryPrice] = useState(0);
      const [totalPrice, settotalPrice] = useState(0);
      const [rotateIcon, setRotateIcon] = useState(true);


  
    const getProducts = async () => {
        try {
            const response = await axios.get(`${backend_url}/api/product/list`)        
            if(response.data.msg){
                setProducts(response.data.products)
            }else{
                toast.error('there no data here')
            }
        } catch (error) {
            console.log(error)
        }
    
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
        takeItem,
        backend_url,
        token,
        setToken,
        navigate,
        setTakeItem,
        wilayas,
        communes,
        nameConfirmation,
        setnameConfirmation,
        setfullName,
        fullName,
        setPhone,
        phone,
        setWilaya,
        wilaya,
        setCommune,
        commune,
        quantity,
        setQuantity,
        productName,
        setProductName,
        deliveryPrice,
        setdeliveryPrice,
        totalPrice,
        settotalPrice,
        setRotateIcon,
        rotateIcon
        
    }


    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider