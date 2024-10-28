import { Card } from '../../../components';

function CoworkingCard(props) {
  return (
    <Card className={`${props.className || ''} p-2 h-full`} animOnHover={true}>
      <img className="w-full min-h-64 md:max-h-64 2xl:max-h-80" src={props.image} alt="Coworking image"/>
      <div className="font-bold text-xl mt-2">{props.name}</div>
      <div className="text-sm">{props.address}</div>
      <p className='mt-2 mb-2 text-sm'>{props.description}</p>
    </Card>
  );
}

export default CoworkingCard;
