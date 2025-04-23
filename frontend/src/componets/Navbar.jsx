import React, { useContext,useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../‏‏assets/frontend_assets/assets";
import { useLocation } from 'react-router-dom';


import { GoChevronLeft } from "react-icons/go";
import { ShopContext } from "../context/shopContext";

const Navbar = () => {

const {setToken,navigate,setTakeItem,token} = useContext(ShopContext)



 const location = useLocation();
  const path = location.pathname.split('/')

  useEffect(() => {
    if (path.includes('collection')) {
      setShowSearch(true)
    }else{
      setShowSearch(false)
    }
  }, [location]);

  const logout = () => {
      localStorage.setItem('token','')
      setToken('')
      setTakeItem({})
      navigate('/login')
  }


  const { setShowSearch,showSearch ,setSearchBar,countOfCarts} = useContext(ShopContext)
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex h-[70px] justify-between mb-10  ">
      <Link to={"/"}>
        <h1 className="text-4xl font-extrabold font-poppins text-gray-600 ">
          KAMSED<span className="text-blue-500 text-6xl aspect-square">.</span>
        </h1>
      </Link>
      <div className="flex justify-between items-center  ">
        <ul className="hidden xl:flex lg:flex md:flex justify-between gap-7 items-center">
          <NavLink
            to={"/"}
            className={
              "flex flex-col relative items-center text-xl  font-bold gap-1 text-gray-600"
            }
          >
            <p className="">الصفحة الرئيسية</p>
            <hr className="h-[2px]  w-3/4 text-blue-500 hidden absolute -bottom-2 " />
          </NavLink>
          <NavLink
            to={"/collection"}
            className={
              "flex relative flex-col items-center gap-1  text-xl  font-bold text-gray-600 "
            }
          >
            <p>المنتجات</p>
            <hr className="h-[2px]  w-2/4 text-blue-500 hidden absolute -bottom-2 " />
          </NavLink>
          <NavLink
            to={"/about"}
            className={
              "flex relative flex-col items-center gap-1 text-xl  font-bold text-gray-600"
            }
          >
            <p>من نحن</p>
            <hr className="h-[2px] text-blue-500 w-2/4  hidden absolute -bottom-2 " />
          </NavLink>
          <NavLink
            to={"/contact"}
            className={
              "flex relative flex-col items-center gap-1 text-xl  font-bold text-gray-600"
            }
          >
            <p>تواصل معنا</p>
            <hr className="h-[2px]  w-2/4 text-blue-500 hidden absolute -bottom-2 " />
          </NavLink>
        </ul>
      </div>
      <div className="flex items-center gap-2">
      <img onClick={()=> setSearchBar(true)} className={`w-5 ${showSearch ?'opacity-100 ' : 'opacity-0 pointer-events-none'}`} src={assets.search_icon} alt="" />
       
      </div>
    </div>
  );
};

export default Navbar;
