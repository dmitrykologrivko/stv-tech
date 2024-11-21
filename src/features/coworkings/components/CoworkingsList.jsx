import CoworkingCard from './CoworkingCard.jsx';

function CoworkingsList({ coworkings }) {
  return (
    <div className='flex flex-wrap -m-4'>
      {coworkings.map((item, index) => (
        <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2'>
          <a href={item.link} target='_blank'>
            <CoworkingCard image={item.image}
                           name={item.name}
                           address={item.address}
                           description={item.description}/>
          </a>
        </div>
      ))}
    </div>
  );
}

export default CoworkingsList;
