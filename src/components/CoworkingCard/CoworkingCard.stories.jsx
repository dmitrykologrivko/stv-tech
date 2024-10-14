import CoworkingCard from './CoworkingCard.jsx';

export default {
  title: 'Components/Cards/CoworkingCard',
  component: CoworkingCard
}

export const Default = () => (
  <CoworkingCard className={'w-80 p-2'}
                 image='/images/coworkings/stdelo.jpg'
                 name='Хороший Коворкинг'
                 address='Улица Ленина, 999 1 этаж'
                 descrition='Коворкинг-центр' />
);
