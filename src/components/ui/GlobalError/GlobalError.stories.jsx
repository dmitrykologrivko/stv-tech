import GlobalError from './GlobalError.jsx';

export default {
  title: 'UI/GlobalError',
  component: GlobalError
}

export const Default = () => <GlobalError error='404 - Страница не найдена'
                                          description='Извините, страница, которую вы ищете, не существует'
                                          buttonLabel='На главную'
                                          onClick={() => alert('Button clicked!')} />;
