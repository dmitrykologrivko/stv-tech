import { NavLink } from 'react-router-dom';
import { Drawer } from '../ui';
import HeaderNavItem from './HeaderNavItem.jsx';
import { NAV_ITEMS, TELEGRAM_LINK } from './constants.js';
import telegramLogo from '../../assets/telegram-white.svg';

function HeaderDrawer({ isOpen, toggleDrawer }) {
  return (
    <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer}>
      <div className='flex flex-col justify-between bg-brand-500 h-full'>
        <nav className='m-2 mt-4'>
          <ul className='text-brand-950 font-bold flex flex-col'>
            {NAV_ITEMS.map((item, index) => (
              <li key={index} onClick={toggleDrawer}>
                <NavLink key={index} to={item.route}
                         className={({ isActive }) => isActive ? 'text-brand-900' : ''}>
                  <HeaderNavItem>{item.name}</HeaderNavItem>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <a className='flex justify-center items-center uppercase p-4 font-bold' href={TELEGRAM_LINK} target='_blank'>
          Обратная связь
          <img src={telegramLogo} className='w-8 h-8 ml-2' alt='Telegram Logo'/>
        </a>
      </div>
    </Drawer>
  );
}

export default HeaderDrawer;
