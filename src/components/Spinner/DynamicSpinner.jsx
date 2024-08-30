import Spinner from './Spinner.jsx';
import { useSpinner } from './SpinnerContext.jsx';

function DynamicSpinner({ forceShow }) {
  const { isLoading } = useSpinner();
  return (
    <Spinner show={forceShow || isLoading} />
  );
}

export default DynamicSpinner;
