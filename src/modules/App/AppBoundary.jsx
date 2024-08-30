import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';
import GlobalError from '../../components/GlobalError/GlobalError.jsx';

function AppBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  let errorMessage = 'Что-то пошло не так';
  let errorDescription = 'Мы столкнулись с неожиданной ошибкой. Попробуйте еще раз позже';

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorMessage = '404 - Страница не найдена';
      errorDescription = 'Извините, страница, которую вы ищете, не существует';
    }
  }

  return (
    <div className='flex justify-center pt-16'>
      <GlobalError error={errorMessage}
                   description={errorDescription}
                   buttonLabel='На главную'
                   onClick={() => navigate('/')}/>
    </div>
  );
}

export default AppBoundary;
