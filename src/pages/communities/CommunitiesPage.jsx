import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle.js';
import { CommunitiesList } from '../../features/communities';
import { NoContent } from '../../components';

function CommunitiesPage() {
  useTitle('Сообщества Ставрополя');

  const communities = useLoaderData();

  return (
    <div className='p-4'>
      {(communities && communities.length > 0) && (<CommunitiesList communities={communities} />)}
      {(!communities && communities.length === 0) && (<div className='flex justify-center pt-16'><NoContent/></div>)}
    </div>
  );
}

export default CommunitiesPage;
