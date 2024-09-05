import Button from '../Button/Button.jsx';
import emptyPage from '../../assets/empty-page.svg';

function NoContent() {
  return (
    <div className='max-w-80 flex flex-col justify-center items-center'>
      <img src={emptyPage} className="w-20 h-20" alt="Emptry Page Image"/>
      <h1 className='font-bold'>Упс! Здесь пока пусто</h1>
      <p className='text-center pb-4'>Похоже, здесь еще нет никакого контента. Загляните чуть позже.</p>
      <Button onClick={() => window.location.reload()}>Обновить</Button>
    </div>
  );
}

export default NoContent;
