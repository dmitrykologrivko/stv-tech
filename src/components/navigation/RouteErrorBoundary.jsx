import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';
import { GlobalError } from '../index.js';

function RouteErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  let errorMessage = 'Что-то пошло не так';

  if (!isRouteErrorResponse(error)) {
    throw error;
  }

  return (
    <div className='flex justify-center pt-16'>
      <GlobalError error={errorMessage}
                   description={`${error.status} ${error.statusText}`}
                   buttonLabel='На главную'
                   onClick={() => navigate('/')}/>
    </div>
  );
}

export default RouteErrorBoundary;
