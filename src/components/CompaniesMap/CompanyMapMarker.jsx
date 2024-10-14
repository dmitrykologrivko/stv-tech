import { YMapDefaultMarker } from '../../lib/ymaps.js';
import Button from '../Button/Button.jsx';
import CloseButton from '../CloseButton/CloseButton.jsx';
import starCircle from '../../assets/star-circle.svg';

function CompanyMapMarker({ feature, activePopupId, onClick, onCloseClick }) {
  const onLinkButtonClick = () => {
    window.open(feature.company?.link, '_blank');
    onCloseClick();
  };

  const popupContent = () => (
    <div className='min-w-60 max-w-80'>
      <div className='flex'>
        <div className='flex-grow'>
          <div className='flex items-center'>
            <span className='font-bold'>{feature.company?.name}</span>
            {feature.company?.flagship && <img src={starCircle} className="h-4 pl-1 inline-block" alt="Star"/>}
          </div>
          <div>{feature.company?.address}</div>
          <div>{feature.company?.category_title}</div>
        </div>
        <CloseButton onClick={onCloseClick}/>
      </div>
      <div className='pt-2 pb-2'>{feature.company?.description}</div>
      <Button onClick={onLinkButtonClick}>Веб-сайт</Button>
    </div>
  );

  return (
    <YMapDefaultMarker key={feature.id}
                       title={feature.title}
                       coordinates={feature.geometry.coordinates}
                       staticHint={true}
                       size='small'
                       iconName={feature.company?.flagship ? 'landmark' : ''}
                       popup={{
                         content: popupContent,
                         position: 'top',
                         show: activePopupId === feature.id
                       }}
                       onClick={onClick} />
  );
}

export default CompanyMapMarker;
