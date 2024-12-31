import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../ui/Logo/Logo.jsx';
import HeaderNav from './HeaderNav.jsx';
import HeaderDrawer from './HeaderDrawer.jsx';
import { TELEGRAM_LINK } from './constants.js';
import menu from '../../../assets/menu.svg';
import telegramLogo from '../../../assets/telegram-white.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='flex items-center justify-between p-2 bg-primary-500 lg:justify-normal lg:p-4'>
      <Link to={'/'}>
        <Logo />
      </Link>

      <HeaderNav className={'flex-grow ml-2 mr-2'}/>

      <HeaderDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />

      <a className='hidden lg:block' href={TELEGRAM_LINK} target='_blank'>
        <img src={telegramLogo} className='w-8 h-8' alt='Telegram Logo'/>
      </a>

      <img src={menu} className='w-8 h-8 cursor-pointer lg:hidden' alt='Menu' onClick={toggleDrawer} />
    </header>
  )
}

export default Header;
