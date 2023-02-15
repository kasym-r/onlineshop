import React, { FC } from 'react'
interface FooterProps {
    logo?:string
}

const Footer: FC<FooterProps> = ({ logo }) => {
  return (
    <div className='flex items-center justify-between bg-gray-500 rounded-t-2xl p-[10px] 1000vh'>
        <div className="flex gap-[40px] pl-[40px]">
            <ul>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
            </ul>
            <ul>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
            </ul>
            <ul>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
            </ul>
            <ul>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
            </ul>
            <ul>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
            </ul>
        </div>
        <img src={logo} alt="" className='w-[65px] h-[65px] rounded-2xl' />

    </div>
  )
}

export default Footer