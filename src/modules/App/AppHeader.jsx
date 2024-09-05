import { Link, NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import HeaderNavItem from '../../components/Header/HeaderNavItem.jsx';

function AppLogo() {
  return (
    <Link to={'/'}>
      <Logo />
    </Link>
  );
}

function MenuNavLink({ to, children }) {
  return (
    <NavLink to={to} className={({ isActive })=> isActive ? 'text-brand-onprimary-active' : ''}>
      {children}
    </NavLink>
  );
}

function AppHeader() {
  const navItems = [
    {
      name: 'IT-Карта',
      route: '/'
    },
    {
      name: 'Сообщества',
      route: 'communities'
    },
    {
      name: 'Стартапы',
      route: 'startups'
    },
    {
      name: 'Коворкинги',
      route: 'coworkings'
    },
  ].map((item, index) => (
    <MenuNavLink key={index} to={item.route}>
      <HeaderNavItem>{item.name}</HeaderNavItem>
    </MenuNavLink>
  ));

  return (
    <Header logo={<AppLogo />}
            navItems={navItems}
            telegramUser='dmitry_kologrivko' />
  );
}

export default AppHeader;
