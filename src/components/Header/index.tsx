import React, { FC } from 'react'

interface HeaderProps {
    logo: string
}

const Header: FC<HeaderProps> = ({ logo }) => {
  return (
    <div>Header</div>
  )
}

export default Header