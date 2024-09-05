import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle.js';
import NoContent from '../../components/NoContent/NoContent.jsx';
import CoworkingCard from '../../components/CoworkingCard/CoworkingCard.jsx';

function CoworkingsPage() {
  const coworkings = useLoaderData();

  useTitle('Коворгинги');

  return (
    <div className='p-4'>
      <h1 className='text-xl pb-4'>Коворкинги Ставрополя</h1>
      {coworkings && coworkings.length > 0
        ? (
          <div className='flex flex-wrap -m-4'>
            {coworkings.map((item, index) => (
              <div key={index} className='w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-2'>
                <a href={item.link} target='_blank'>
                  <CoworkingCard image={item.image}
                                 name={item.name}
                                 address={item.address}
                                 description={item.description}/>

                </a>
              </div>
            ))}
          </div>
        )
        : (
          <div className='flex justify-center pt-16'>
            <NoContent/>
          </div>
        )
      }
    </div>
  );
}

export default CoworkingsPage;
