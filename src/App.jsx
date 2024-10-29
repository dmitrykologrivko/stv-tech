import { Outlet, useNavigation } from 'react-router-dom';
import {
  Header,
  WelcomeBanner,
  DynamicSpinner
} from './components';
import Provider from './Provider.jsx';

function App() {
  const location = useNavigation();
  return (
    <Provider>
      <Header/>
      <WelcomeBanner/>
      <main>
        <Outlet/>
      </main>
      <DynamicSpinner forceShow={location.state === 'loading'}/>
    </Provider>
  )
}

export default App;
