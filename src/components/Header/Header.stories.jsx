import Header from './Header.jsx';
import Logo from '../Logo/Logo.jsx';
import HeaderNavItem from './HeaderNavItem.jsx';

export default {
  title: 'Components/Header',
  component: Header
}

export const Default = {
  args: {
    logo: <Logo/>,
    navItems: [
      'Item 1',
      'Item 2',
      'Item 3',
    ].map((item, index) => <HeaderNavItem key={index}>{item}</HeaderNavItem>),
    telegramUser: 'test'
  }
}
