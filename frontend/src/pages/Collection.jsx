import React, { useContext, useState, useEffect } from 'react'
import ProductItems from '../componets/ProductItems';
import Title from '../componets/Title';
import { GoChevronDown } from "react-icons/go";
import { ShopContext } from '../context/shopContext';



const Collection = () => {

  const { products, search, wilayas, communes } = useContext(ShopContext)


  const [category, setCategory] = useState([])
  const [subCategory, setsubCategory] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [showCategories, setshowCategories] = useState("hidden")
  const [icon, setIcon] = useState(true)
  const [sortedBy, setsortedBy] = useState();


  const filterCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter((cat) => {
        return cat !== e.target.value
      }))

    } else {
      setCategory(prev => [...prev, e.target.value])
    }

  }
  const filterSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory(prev => prev.filter((cat) => {
        return cat !== e.target.value
      }))

    } else {
      setsubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let copiedProducts = [...products]
    if (category.length) {
      copiedProducts = copiedProducts.filter((cop) => category.includes(cop.category))
    }
    if (subCategory.length) {
      copiedProducts = copiedProducts.filter((cop) => subCategory.includes(cop.subCategory))
    }
    if (search) {
      copiedProducts = copiedProducts.filter((ser) => ser.name.toLowerCase().includes(search.toLowerCase()))
    }

    setAllProducts(copiedProducts)
  }


  useEffect(() => {
    applyFilter()
    sorterdProducts()
  }, [category, subCategory, sortedBy, search, products]);


  const sorted = (e) => {
    setsortedBy(e.target.value)
  }


  const showCategoriesHandle = () => {
    if (showCategories === 'hidden') {
      setIcon(false)
      setshowCategories('flex')
    } else {
      setIcon(true)
      setshowCategories('hidden')
    }
  }

  const sorterdProducts = () => {
    if (sortedBy === 'low') {
      setAllProducts(prev => prev.sort((a, b) => {
        return a.price - b.price
      }))

    }
    if (sortedBy === 'high') {
      setAllProducts(prev => prev.sort((a, b) => {
        return b.price - a.price
      }))

    }

  }


  return (
    <div className=' w-full flex xl:flex-row  md:flex-col xm:flex-col sm:flex-col lg:flex-row  justify-between '>
      <div className='sm:w-full  md:w-full xl:w-72 lg:w-52 flex flex-col gap-y-5 xl:p-8 xm:pl-8 '>
        <h1 onClick={showCategoriesHandle} className='font-poppins font-bold text-gray-600 text-2xl xl:mb-8 lg:mb-8 flex items-center gap-1 '>FILTERS
          <span className='xl:hidden lg:hidden '><GoChevronDown className={`${icon ? 'rotate-0' : 'rotate-180'} transition-all duration-300`} />
          </span>
        </h1>
        <div className={`border w-full  border-gray-300 flex flex-col gap-5 p-5 xl:flex  lg:flex ${showCategories}  xm:${showCategories} md:${showCategories}`}>
          <h1 className='font-poppins text-gray-800 text-xl'>CATEGORIES</h1>
          <div className='flex flex-col gap-2   '>
            <div className='flex gap-2'>
              <input className='' onChange={filterCategory} type="checkbox" value={'Men'} />
              <label className='font-poppins text-gray-500' htmlFor="">Men</label>
            </div>
            <div className='flex gap-2'>
              <input onChange={filterCategory} type="checkbox" value={'Women'} />
              <label className='font-poppins text-gray-500' htmlFor="">Women</label>
            </div>
            <div className='flex gap-2'>
              <input onChange={filterCategory} type="checkbox" value={'Kids'} />
              <label className='font-poppins text-gray-500' htmlFor="">Kids</label>
            </div>
          </div>

        </div>
        <div className={`border   border-gray-300 flex flex-col gap-5 p-5 xl:flex $ lg:flex ${showCategories} xm:${showCategories} md:${showCategories}`}>
          <h1 className='font-poppins text-gray-800 text-xl'>TYPE</h1>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
              <input className='' onChange={filterSubCategory} type="checkbox" value={'Topwear'} />
              <label className='font-poppins text-gray-500' htmlFor="">Topwear</label>
            </div>
            <div className='flex gap-2'>
              <input onChange={filterSubCategory} type="checkbox" value={'Bottomwear'} />
              <label className='font-poppins text-gray-500' htmlFor="">Bottomwear</label>
            </div>
            <div className='flex gap-2'>
              <input onChange={filterSubCategory} type="checkbox" value={'Winterwear'} />
              <label className='font-poppins text-gray-500' htmlFor="">Winterwear</label>
            </div>
          </div>

        </div>
      </div>

      <div className='flex flex-1 xl:flex-col lg:flex-col md:flex-col  sm:flex-col xm:flex-col w-full p-8 '>
        <div className='flex xl:flex-row lg:flex-row sm:flex-col xm:flex-col  gap-4 justify-between'>
          <div className='border bg-gray-100 border-gray-300 max-w-36 h-max '>
            <div>
              <select dir="rtl" onChange={sorted} className='font-bold text-right py-3 px-2  ' name="" id="">
                <option className='' value="">  الترتيب حسب :</option>
                <option className='font-bold' value="low"> الأرخص</option>
                <option className='font-bold' value="high">الأغلى</option>
              </select>
              <div />
              <div />
            </div>
          </div>
          <Title text1={'المنتجات'} text2={'جميع'} />
        </div>
        <div className='mt-7 grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2 xl:grid-cols-4 xm:grid-cols-1 gap-y-6 space-y-5 gap-10  '>
          {allProducts.map((item) => {
            return <ProductItems key={item._id} id={item._id} name={item.name} image={item.image[0]} price={item.price} />
          })}
        </div>
      </div>


    </div>
  )
}

export default Collection

