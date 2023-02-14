import { FC } from 'react';

interface HeaderProps {
  logo?: string;
  image?: string;
  popup?: boolean;
}

const Header: FC<HeaderProps> = ({ logo, image, popup }) => {
  return (
    <div className="flex justify-between items-center w-full p-2 bg-gray-500 rounded-b-2xl shadow-xl">
        <img src={logo} alt="" className="w-[100px] h-[100px] rounded-xl" />
        <button className="p-4 px-10 rounded-2xl bg-blue-500 text-white">Login</button>
    </div>
  );
};

export default Header;