import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { assets } from "../‏‏assets/frontend_assets/assets";
import { GoChevronLeft } from "react-icons/go";
import { ShopContext } from "../context/shopContext";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname.split("/");




  const [darkMode, setDarkMode] = useState(() => {
    // قراءة الوضع المحفوظ من localStorage
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);





  const { setShowSearch, showSearch, setSearchBar, setRotateIcon,rotateIcon } =
    useContext(ShopContext);

  useEffect(() => {
    setShowSearch(path.includes("collection"));
  }, [location]);

  const [visible, setVisible] = useState(false);


  const handleVisible = () => {
    if(visible === true){
      setVisible(false)
      setRotateIcon(true)
      
    }else{
      setVisible(true)
      setRotateIcon(false)
      
    }

    
  }

  return (
    <header className="w-full bg-white/90 shadow-md backdrop-blur-md  z-50 mb-3 ">
        <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-4 left-4 z-50 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded-full shadow-md hover:scale-105 transition"
      title="تبديل الوضع"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
      <div className=" mx-auto px-4 py-3  flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"}>
          <h1 className="text-3xl  font-black text-gray-700">
            KAMSED
            <span className="text-orange-500 text-4xl">.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-600 font-bold">
          {[
            { name: "الصفحة الرئيسية", path: "/" },
            { name: "المنتجات", path: "/collection" },
            { name: "من نحن", path: "/about" },
            { name: "تواصل معنا", path: "/contact" },
          ].map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `relative group text-xl transition hover:text-orange-500 font-bold xl:text-xl lg:text-xl md:text-[17px]   ${
                  isActive ? "text-orange-500" : ""
                }`
              }
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-orange-400 transition-all group-hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          {showSearch && (
            <img
              onClick={() => setSearchBar(true)}
              className="w-6 h-6 cursor-pointer"
              src={assets.search_icon}
              alt="search"
            />
          )}

          {/* Mobile Menu Icon */}
          <img
            onClick={handleVisible}
            src={assets.menu_icon}
            className="w-7 h-7 md:hidden cursor-pointer"
            alt="menu"
          />
        </div>
      </div>

      {/* Mobile Nav */}
   
       <div
        className={`absolute top-0 left-0 h-max bg-gray-300 z-50 transition-all duration-300 shadow-md   ${
          visible ? "w-full px-6 py-8" : "w-0 overflow-hidden"
        }`}
      >
        <div
          className="flex items-center text-xl text-gray-600 mb-6 cursor-pointer "
          onClick={ handleVisible}
        >
          <GoChevronLeft className="text-3xl" />
          <span className="ml-2">رجوع</span>
        </div>
        <ul className="flex flex-col gap-4 text-xl text-gray-700 font-bold ">
          {[
            { name: "الصفحة الرئيسية", path: "/" },
            { name: "المنتجات", path: "/collection" },
            { name: "من نحن", path: "/about" },
            { name: "تواصل معنا", path: "/contact" },
          ].map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              onClick={() => setVisible(false)}
              className="py-2 border-b border-gray-200"
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
      </div> 
    </header>
  );
};

export default Navbar;


// import React, { useContext, useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { assets } from "../‏‏assets/frontend_assets/assets";
// import { useLocation } from 'react-router-dom';


// import { GoChevronLeft } from "react-icons/go";
// import { ShopContext } from "../context/shopContext";

// const Navbar = () => {


//   const location = useLocation();
//   const path = location.pathname.split('/')

//   useEffect(() => {
//     if (path.includes('collection')) {
//       setShowSearch(true)
//     } else {
//       setShowSearch(false)
//     }
//   }, [location]);

//   const { setShowSearch, showSearch, setSearchBar, countOfCarts } = useContext(ShopContext)







//   const [visible, setVisible] = useState(false);
//   return (
//     <div className="flex h-[70px] justify-between items-center mb-10 shadow-md backdrop-blur-m   ">
//       <Link to={"/"}>
//         <h1 className="xl:text-4xl md:text-3xl xm:text-3xl sm:text-4xl font-extrabold font-poppins text-gray-600 ">
//           KAMSED<span className="text-orange-400 text-6xl aspect-square">.</span>
//         </h1>
//       </Link>
//       <div className="flex justify-between items-center pt-4 ">
//         <ul className="hidden xl:flex lg:flex md:flex justify-between gap-7 items-center">
//           <NavLink
//             to={"/"}
//             className={
//               "flex flex-col relative items-center xl:text-xl lg:text-xl md:text-[16px]  font-bold gap-1 text-gray-600"
//             }
//           >
//             <p className="">الصفحة الرئيسية</p>
//             <hr className="h-[2px]  w-3/4 text-orange-400  hidden absolute -bottom-2 " />
//           </NavLink>
//           <NavLink
//             to={"/collection"}
//             className={
//               "flex relative flex-col items-center gap-1  xl:text-xl lg:text-xl md:text-[16px]  font-bold text-gray-600 "
//             }
//           >
//             <p>المنتجات</p>
//             <hr className="h-[2px]  w-2/4 text-orange-400 hidden absolute -bottom-2 " />
//           </NavLink>
//           <NavLink
//             to={"/about"}
//             className={
//               "flex relative flex-col items-center gap-1 xl:text-xl lg:text-xl  md:text-[16px]   font-bold text-gray-600"
//             }
//           >
//             <p>من نحن</p>
//             <hr className="h-[2px] text-amber-30000 w-2/4 text-orange-400 hidden absolute -bottom-2 " />
//           </NavLink>
//           <NavLink
//             to={"/contact"}
//             className={
//               "flex relative flex-col items-center gap-1 xl:text-xl lg:text-xl text-xl md:text-[16px]   font-bold text-gray-600"
//             }
//           >
//             <p>تواصل معنا</p>
//             <hr className="h-[2px]  w-2/4 text-orange-400 hidden absolute -bottom-2 " />
//           </NavLink>
//         </ul>
//       </div>

//       <div className={`flex  items-center gap-2 xm:pt-5 sm:pt-5 ${showSearch ? 'block' : 'hidden'}`}>    
//       <img onClick={() => setSearchBar(true)} className={`w-8 cursor-pointer ${showSearch ? 'block' : 'hidden pointer-events-none '}`} src={assets.search_icon} alt="" />
//       <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon}
//           className="w-8 xl:hidden lg:hidden text-gray-200 md:hidden sm:flex cursor-pointer ml-2 "
//           alt=""
//         />
//       </div>
//       <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon}
//           className="w-8 text-gray-200 xl:hidden lg:hidden md:hidden sm:flex cursor-pointer ml-2 absolute right-[19px] top-[33px]  "
//           alt=""
//         />
      

//       {/* // hidden links///////////////////////////// */}

//       <div
//         className={`transition-all duration-200 ease-in left-0 z-10  absolute  w-0 overflow-hidden  top-0 right-0 ${visible ? "w-full   " : ""
//           }   bottom-0  flex justify-start bg-gray-100  `}
//       >
//         <div
//           className=" absolute flex items-center gap-2 pl-2 text-2xl text-gray-600"
//           onClick={() => setVisible(false)}
//         >
//           <GoChevronLeft className="pt-1 text-4xl cursor-pointer " />
//           رجوع
//         </div>
//         <ul className=" justify-between gap-5 items-center absolute w-full mt-10">
//           <NavLink
//             onClick={() => setVisible(false)}
//             to={"/"}
//             className={
//               " nav-btn flex text-2xl flex-col border px-4 border-gray-300 py-2 relative  font-bold  gap-1 text-gray-600"
//             }
//           >
//             <p>الصفحة الرئيسية</p>
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             to={"/collection"}
//             className={
//               "nav-btn flex relative text-2xl border  px-4 border-gray-300 py-2 flex-col  gap-1 font-bold  text-gray-600 "
//             }
//           >
//             <p>المنتجات</p>
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             to={"/about"}
//             className={
//               "nav-btn flex text-2xl relative py-2 px-4 border border-gray-300 flex-col  gap-1 font-bold  text-gray-600"
//             }
//           >
//             <p>من نحن</p>
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             to={"/contact"}
//             className={
//               "nav-btn flex relative text-2xl border px-4 border-gray-300 py-2 flex-col  gap-1 font-bold  text-gray-600"
//             }
//           >
//             <p>تواصل معنا</p>
//           </NavLink>
//         </ul>

//       </div>
//     </div>

//   );
// };

// export default Navbar;
