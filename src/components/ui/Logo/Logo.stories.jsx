import Logo from './Logo.jsx';

export default {
  title: 'UI/Logo',
  component: Logo
}

export const Default = () => (
  <div className='p-4 bg-primary-500'>
    <Logo/>
  </div>
);
