import Logo from './Logo.jsx';

export default {
  title: 'Global/Logo',
  component: Logo
}

export const Default = () => (
  <div className='p-4 bg-brand-500'>
    <Logo/>
  </div>
);
