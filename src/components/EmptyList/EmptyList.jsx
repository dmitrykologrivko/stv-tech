import { Button } from '../ui';
import emptyPage from '../../assets/empty-page.svg';

function EmptyList({ onResetFilters }) {
  return (
    <div className='max-w-80 flex flex-col justify-center items-center'>
      <img src={emptyPage} className='w-20 h-20' alt='Emptry List Image'/>
      <h1 className='font-bold pb-4'>Список пуст</h1>
      <Button onClick={onResetFilters}>Сбросить фильтры</Button>
    </div>
  );
}

export default EmptyList;
