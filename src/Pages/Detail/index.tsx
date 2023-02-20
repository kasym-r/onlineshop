import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { FirebaseDB } from '../../db/db'
import { RootState } from '../../store/store'

const Detail = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const { getProduct } = FirebaseDB();
  const { product } = useSelector((state: RootState) => state.product)

  // let params = searchParams.get("key")
  // console.log(params);
  const location = useLocation();
  const params = useParams();  

  useEffect(() => {
    if (params.id) {
      getProduct(params.id);
    }
  }, [params])
  
  return (
    <div className='w=full h-full flex flex-col items-center'>
      <div className='max-h-[600px] max-w-[500px]'>
        <img src={product?.image} alt="" />
      </div>
      <div className='text-center'>
        <h1 className='text-2xl'>{product?.title}</h1>
        <p className='text-xl'>{product?.desc}</p>
        <span className='text-3xl font-bold'>{product?.price}</span>
      </div>
    </div>
  )
}

export default Detail