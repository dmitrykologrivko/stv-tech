import { Component } from 'react';
import { GlobalError } from './components';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
    this.setState(prevState => ({ ...prevState, error, errorInfo }));
  }

  handleRetry ()  {
    this.setState({ hasError: false, error: null, errorInfo: null });
  }

  render() {
    const errorMessage = 'Что-то пошло не так';
    const errorDescription = 'Мы столкнулись с неожиданной ошибкой. Попробуйте еще раз позже';

    if (this.state.hasError) {
      const { fallback } = this.props;
      if (fallback) {
        return fallback(
          this.state.error,
          this.state.errorInfo,
          this.handleRetry,
        );
      }

      // Default fallback UI
      return (
        <div className='w-lvw h-lvh flex items-center justify-center'>
          <GlobalError error={errorMessage}
                       description={errorDescription}
                       buttonLabel='Обновить'
                       onClick={() => window.location.reload()}/>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
