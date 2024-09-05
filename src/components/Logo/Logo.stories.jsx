import Logo from './Logo.jsx';

export default {
  title: 'Components/Logo',
  component: Logo
}

export const Default = () => (
  <div className='p-4 bg-brand-primary'>
    <Logo/>
  </div>
);
