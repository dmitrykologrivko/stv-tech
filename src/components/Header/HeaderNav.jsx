import { NavLink } from 'react-router-dom';
import HeaderNavItem from './HeaderNavItem.jsx';
import { NAV_ITEMS } from './constants.js';

function HeaderNav({ className }) {
  return (
    <nav className={className}>
      <ul className='hidden text-brand-onprimary font-bold lg:flex'>
        {NAV_ITEMS.map((item, index) => (
          <li key={index}>
            <NavLink key={index} to={item.route}
                     className={({ isActive }) => isActive ? 'text-brand-onprimary-active' : ''}>
              <HeaderNavItem>{item.name}</HeaderNavItem>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNav;
