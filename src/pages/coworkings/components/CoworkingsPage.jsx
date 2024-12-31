import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle.js';
import CoworkingsList from '../../../features/coworkings/components/CoworkingsList.jsx';
import NoContent from '../../../components/ui/NoContent/NoContent.jsx';

function CoworkingsPage() {
  useTitle('Коворгинги Ставрополя');

  const coworkings = useLoaderData();

  return (
    <div className='p-4'>
      <h1 className='text-xl pb-4'>Коворкинги Ставрополя</h1>
      {(coworkings && coworkings.length > 0) && (<CoworkingsList coworkings={coworkings} />)}
      {(!coworkings || coworkings.length === 0) && (<div className='flex justify-center pt-16'><NoContent/></div>)}
    </div>
  );
}

export default CoworkingsPage;
