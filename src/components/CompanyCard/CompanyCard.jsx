import Card from '../Card/Card.jsx';
import starCircle from '../../assets/star-circle.svg';

function CompanyCard(props) {
  return (
    <Card className={`${props.className || ''} p-2 h-full`}>
      <div className='flex'>
        <div className='flex-grow'>
          <div className='flex items-center'>
            <span className='font-bold'>{props.name}</span>
            {props.flagship ? <img src={starCircle} className="h-4 pl-1 inline-block" alt="Star"/> : <></>}
          </div>
          <div>{props.address}</div>
          <div>{props.category}</div>
        </div>
      </div>
      <div className='pt-2'>{props.description}</div>
    </Card>
  );
}

export default CompanyCard;
