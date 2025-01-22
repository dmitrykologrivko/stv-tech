import Provider from './Provider.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

function App() {
  return (
    <ErrorBoundary>
      <Provider/>
    </ErrorBoundary>
  )
}

export default App;
