import useTitle from '../../../hooks/useTitle.js';
import NoContent from '../../../components/NoContent/NoContent.jsx';

function StartupsPage() {
  useTitle('Стартапы Ставрополья');
  return (
    <div className='flex justify-center pt-16'>
      <NoContent/>
    </div>
  );
}

export default StartupsPage;
