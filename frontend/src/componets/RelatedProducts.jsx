import React, { useContext, useState,useEffect} from 'react'
import { ShopContext } from '../context/shopContext'
import Title from './Title';
import ProductItems from './ProductItems';

const RelatedProducts = ({category,id}) => {
  const {products} = useContext(ShopContext)
  const [relatedProducts, setrelatedProducts] = useState([]);
  const filterProductByCatAndSub = () => {
    let copyProducts = [...products]
    copyProducts = copyProducts.filter((pro)=>{
      return pro.category === category  && pro._id !== id
    })
    setrelatedProducts(copyProducts.slice(0,5))
  }

  useEffect(() => {
    filterProductByCatAndSub()
  }, []);


  return relatedProducts.length && (
    <div>
      <div className='text-center mt-10'>
        <Title text1={'ذات صلة'} text2={'منتجات'}/>
      </div>
      <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2 xl:grid-cols-5 xm:grid-cols-1 gap-y-6 gap-10'>
        {relatedProducts.map((rel)=> {
          return(
            <ProductItems key={rel._id} id={rel._id} name={rel.name} image={rel.image[0]} price={rel.price}/>
          )
        })}
      </div>
   
   
    </div>
  )
}

export default RelatedProducts
