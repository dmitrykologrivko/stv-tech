import { YMapMarker } from '../../lib/ymaps.js';

function CompaniesMapMarker({ features, coordinates }) {
  return (
    <YMapMarker key={`${features[0].id}-${features.length}`} coordinates={coordinates}>
      <div className='w-10 h-10 rounded-full bg-[#E63D2E] border-white border-4'>
        <div className='h-full flex justify-center items-center'>
          <span className='text-white font-bold'>{features.length}</span>
        </div>
      </div>
    </YMapMarker>
  );
}

export default CompaniesMapMarker;
