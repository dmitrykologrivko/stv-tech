import { Outlet, useNavigation } from 'react-router-dom';
import {
  Header,
  WelcomeBanner,
  DynamicSpinner
} from './components';

function App() {
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

export default App;
