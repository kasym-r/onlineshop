import React, { FC } from 'react'

interface CardProps {
    image: string;
    title: string;
    desc: string;
    price: number | string;
}

const Card: FC<CardProps> = ({ image, title, desc, price }) => {
  return (
    <div>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{desc}</p>
        <span>{price}</span>
    </div>
  )
}

export default Card