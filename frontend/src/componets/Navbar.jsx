import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../‏‏assets/frontend_assets/assets";
import { useLocation } from 'react-router-dom';


import { GoChevronLeft } from "react-icons/go";
import { ShopContext } from "../context/shopContext";

const Navbar = () => {


  const location = useLocation();
  const path = location.pathname.split('/')

  useEffect(() => {
    if (path.includes('collection')) {
      setShowSearch(true)
    } else {
      setShowSearch(false)
    }
  }, [location]);

  const { setShowSearch, showSearch, setSearchBar, countOfCarts } = useContext(ShopContext)







  const [visible, setVisible] = useState(false);
  return (
    <div className="flex h-[70px] justify-between items-center mb-10   ">
      <Link to={"/"}>
        <h1 className="xl:text-4xl md:text-3xl xm:text-3xl sm:text-4xl font-extrabold font-poppins text-gray-600 ">
          KAMSED<span className="text-amber-300 text-6xl aspect-square">.</span>
        </h1>
      </Link>
      <div className="flex justify-between items-center pt-4 ">
        <ul className="hidden xl:flex lg:flex md:flex justify-between gap-7 items-center">
          <NavLink
            to={"/"}
            className={
              "flex flex-col relative items-center xl:text-xl lg:text-xl md:text-[16px]  font-bold gap-1 text-gray-600"
            }
          >
            <p className="">الصفحة الرئيسية</p>
            <hr className="h-[2px]  w-3/4 text-amber-300  hidden absolute -bottom-2 " />
          </NavLink>
          <NavLink
            to={"/collection"}
            className={
              "flex relative flex-col items-center gap-1  xl:text-xl lg:text-xl md:text-[16px]  font-bold text-gray-600 "
            }
          >
            <p>المنتجات</p>
            <hr className="h-[2px]  w-2/4 text-amber-300 hidden absolute -bottom-2 " />
          </NavLink>
          <NavLink
            to={"/about"}
            className={
              "flex relative flex-col items-center gap-1 xl:text-xl lg:text-xl  md:text-[16px]   font-bold text-gray-600"
            }
          >
            <p>من نحن</p>
            <hr className="h-[2px] text-amber-30000 w-2/4 text-amber-300  hidden absolute -bottom-2 " />
          </NavLink>
          <NavLink
            to={"/contact"}
            className={
              "flex relative flex-col items-center gap-1 xl:text-xl lg:text-xl text-xl md:text-[16px]   font-bold text-gray-600"
            }
          >
            <p>تواصل معنا</p>
            <hr className="h-[2px]  w-2/4 text-orange-300 hidden absolute -bottom-2 " />
          </NavLink>
        </ul>
      </div>

      <div className={`flex  items-center gap-2 xm:pt-5 sm:pt-5 ${showSearch ? 'block' : 'hidden'}`}>    
      <img onClick={() => setSearchBar(true)} className={`w-8 cursor-pointer ${showSearch ? 'block' : 'hidden pointer-events-none '}`} src={assets.search_icon} alt="" />
      <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-8 xl:hidden lg:hidden text-gray-200 md:hidden sm:flex cursor-pointer ml-2 "
          alt=""
        />
      </div>
      <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-8 text-gray-200 xl:hidden lg:hidden md:hidden sm:flex cursor-pointer ml-2 absolute right-[19px] top-[33px]  "
          alt=""
        />
      

      {/* // hidden links///////////////////////////// */}

      <div
        className={`transition-all duration-200 ease-in left-0 z-10  absolute  w-0 overflow-hidden  top-0 right-0 ${visible ? "w-full   " : ""
          }   bottom-0  flex justify-start bg-gray-100  `}
      >
        <div
          className=" absolute flex items-center gap-2 pl-2 text-2xl text-gray-600"
          onClick={() => setVisible(false)}
        >
          <GoChevronLeft className="pt-1 text-4xl cursor-pointer " />
          رجوع
        </div>
        <ul className=" justify-between gap-5 items-center absolute w-full mt-10">
          <NavLink
            onClick={() => setVisible(false)}
            to={"/"}
            className={
              " nav-btn flex text-2xl flex-col border px-4 border-gray-300 py-2 relative  font-bold  gap-1 text-gray-600"
            }
          >
            <p>الصفحة الرئيسية</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/collection"}
            className={
              "nav-btn flex relative text-2xl border  px-4 border-gray-300 py-2 flex-col  gap-1 font-bold  text-gray-600 "
            }
          >
            <p>المنتجات</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/about"}
            className={
              "nav-btn flex text-2xl relative py-2 px-4 border border-gray-300 flex-col  gap-1 font-bold  text-gray-600"
            }
          >
            <p>من نحن</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/contact"}
            className={
              "nav-btn flex relative text-2xl border px-4 border-gray-300 py-2 flex-col  gap-1 font-bold  text-gray-600"
            }
          >
            <p>تواصل معنا</p>
          </NavLink>
        </ul>

      </div>
    </div>

  );
};

export default Navbar;
