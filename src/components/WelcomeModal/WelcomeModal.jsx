import Modal from '../Modal/Modal.jsx';
import Button from '../Button/Button.jsx';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import smile from '../../assets/smile.svg';

function WelcomeModal() {
  const [isFirstSeen, setFirstSeen] = useLocalStorage('is_first_seen', true);

  function closeModal() {
    setFirstSeen(false);
  }

  return (
    <Modal show={isFirstSeen}
           onClose={closeModal}
           className='max-w-sm bg-white rounded p-4 mr-4 ml-4'
           header={(
             <div className='flex justify-center items-center text-xl'>
               Добро пожаловать!
               <img src={smile} className="h-6 pl-1" alt="Smile"/>
             </div>
           )}
           body={(
             <p className='p-4 text-sm'>
               Этот сайт предназначен исключительно для <b>информационных целей</b> и содержит данные из <b>открытых источников</b>.
               Мы не гарантируем точность или актуальность информации.
               Сайт не имеет коммерческих целей и создан для айти-специалистов, как местных жителей,
               так и тех, кто собирается переехать в наш город.
               Ваши замечания и предложения можно отправить нам в Telegram.
             </p>
           )}
           footer={(
             <div className='flex items-center justify-center'>
               <div className='w-64'>
                 <Button onClick={closeModal}>Закрыть</Button>
               </div>
             </div>
           )} />
  );
}

export default WelcomeModal;
