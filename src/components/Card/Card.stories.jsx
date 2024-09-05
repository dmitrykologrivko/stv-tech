import Card from './Card.jsx';

export default {
  title: 'Components/Cards/Card',
  component: Card
}

export const Default = () => (
  <Card className={'w-80 h-80 p-2'}>
    <div className='h-full flex justify-center items-center'>This is card component</div>
  </Card>
);
