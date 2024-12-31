import { useNavigate } from 'react-router-dom';
import GlobalError from '../../../components/ui/GlobalError/GlobalError.jsx';

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className='flex justify-center pt-16'>
      <GlobalError error='404 - Страница не найдена'
                   description='Извините, страница, которую вы ищете, не существует'
                   buttonLabel='На главную'
                   onClick={() => navigate('/')} />
    </div>
  );
}

export default NotFoundPage;
