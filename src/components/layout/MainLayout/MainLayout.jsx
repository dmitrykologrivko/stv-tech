import { Outlet, useNavigation } from 'react-router-dom';
import { DynamicSpinner } from '../../ui';
import Header from '../Header/Header.jsx';
import WelcomeBanner from '../WelcomeBanner/WelcomeBanner.jsx';

function MainLayout() {
  const location = useNavigation();
  return (
    <>
      <Header/>
      <WelcomeBanner/>
      <main>
        <Outlet/>
      </main>
      <DynamicSpinner forceShow={location.state === 'loading'}/>
    </>
  )
}

export default MainLayout;
