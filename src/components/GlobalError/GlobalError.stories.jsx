import GlobalError from './GlobalError.jsx';

export default {
  title: 'Global/GlobalError',
  component: GlobalError
}

export const Default = () => <GlobalError error='404 - Страница не найдена'
                                          description='Извините, страница, которую вы ищете, не существует'
                                          buttonLabel='На главную'
                                          onClick={() => alert('Button clicked!')} />;
