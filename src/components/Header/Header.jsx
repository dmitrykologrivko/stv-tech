import telegramLogo from '../../assets/telegram.svg';

function Header({ logo, navItems, telegramUser }) {
  return (
    <header className='p-4 flex flex-col md:flex-row gap-4 items-center bg-brand-primary'>
      {logo}

      <ul className='text-brand-onprimary font-bold flex flex-col md:flex-row flex-grow'>
        {navItems.map((item, index) => <li key={index}>{item}</li>)}
      </ul>

      <a href={`https://t.me/${telegramUser}?start=message`} target='_blank'>
        <img src={telegramLogo} className="w-8 h-8" alt="Logo"/>
      </a>
    </header>
  )
}

export default Header;
