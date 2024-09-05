import { useState } from 'react';
import Drawer from '../Drawer/Drawer.jsx';
import menu from '../../assets/menu.svg';
import telegramLogo from '../../assets/telegram-white.svg';

function Header({ logo, navItems, telegramUser }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='flex items-center justify-between p-4 bg-brand-primary lg:justify-normal'>
      {logo}

      <nav className='flex-grow ml-2 mr-2'>
        <ul className='hidden text-brand-onprimary font-bold lg:flex'>
          {navItems.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </nav>

      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer}>
        <div className='flex flex-col justify-between bg-brand-primary h-full'>
          <nav className='m-2 mt-4'>
            <ul className='text-brand-onprimary font-bold flex flex-col'>
              {navItems.map((item, index) => <li key={index} onClick={toggleDrawer}>{item}</li>)}
            </ul>
          </nav>

          <a className='flex justify-center items-center uppercase p-4 font-bold'
             href={`https://t.me/${telegramUser}?start=message`} target='_blank'>
            Обратная связь
            <img src={telegramLogo} className="w-8 h-8 ml-2" alt="Telegram Logo"/>
          </a>
        </div>
      </Drawer>

      <a className='hidden lg:block' href={`https://t.me/${telegramUser}?start=message`} target='_blank'>
        <img src={telegramLogo} className="w-8 h-8" alt="Telegram Logo"/>
      </a>

      <img src={menu} className="w-8 h-8 cursor-pointer lg:hidden" alt="Menu" onClick={toggleDrawer}/>
    </header>
  )
}

export default Header;
