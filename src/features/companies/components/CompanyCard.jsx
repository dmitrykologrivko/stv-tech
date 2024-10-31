import { Card, Tooltip } from '../../../components';
import starCircle from '../../../assets/star-circle.svg';

function CompanyCard(props) {
  return (
    <Card className={`${props.className || ''} p-4 h-full`}>
      <div className='flex'>
        <div className='flex-grow'>
          <div className='flex items-center'>
            <span className='font-bold'>{props.name}</span>
            {props.flagship && (
              <Tooltip text='Значимый участник IT-рынка региона' width='200px' position='right'>
                <img src={starCircle} className="h-4 pl-1 inline-block" alt="Star"/>
              </Tooltip>
            )}
          </div>
          <div>{props.address}</div>
          <div className='text-sm text-primary-700'>{props.category}</div>
        </div>
      </div>
      <div className='pt-2'>{props.description}</div>
    </Card>
  );
}

export default CompanyCard;
