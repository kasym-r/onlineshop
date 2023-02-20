import React, { FC } from 'react'

//Helpers
import { openInNewTab } from '../../helpers/window.helper';

interface CardProps {
    image: string;
    title: string;
    desc: string;
    price: number | string;
    id: string;
}

const Card: FC<CardProps> = ({ image, title, desc, price, id }) => {
  const onClick = () => {
    openInNewTab(id)
  }

  return (
    <div onClick={onClick} className='w-full cursor-pointer shadow-lg p-2 rounded hover:shadow-xl transition-all'>
      <div className='max-h-[400px]'>
        <img src={image} alt="" className='w-full h-full rounded-lg' />
      </div>
      <div className='text-left'>
        <h3 className='text-lg font-bold'>{title}</h3>
        <p className='text-sm'>{desc}</p>
        <span className='text-xl font-bold'>{price}$</span>
      </div>
    </div>
  )
}

export default Card