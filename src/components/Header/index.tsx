import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import AuthDB from '../../db/auth';
import { RootState } from '../../store/store';

interface HeaderProps {
  logo?: string;
  image?: string;
  popup?: boolean;
}

const Header: FC<HeaderProps> = ({ logo, image, popup }) => {
  const { user } = useSelector((state: RootState) => state.user)
  const { googleAuth, logout } = AuthDB();

  const handleClick = () => {
    if (!user) {
      googleAuth();
    } else {
      logout();
    }
  }

  return (
    <div className="flex justify-between items-center w-full p-2 bg-gray-500 rounded-b-2xl shadow-xl">
        <img src={logo} alt="" className="w-[100px] h-[100px] rounded-xl" />
        {user ? (
          <>
            <span className='text-white'>{user.displayName}</span>
            <img src={user.photoURL} alt="" />
          </>
        ) : null}
        <button 
        onClick={handleClick} 
        className="p-4 px-10 rounded-2xl bg-black text-white"
      >
        {user ? 'LogOut' : 'LogIn'}
      </button>
    </div>
  );
};

export default Header;