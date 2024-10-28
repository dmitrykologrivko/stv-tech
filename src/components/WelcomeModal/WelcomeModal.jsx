import { Modal, Button } from '../ui';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import smile from '../../assets/smile.svg';

function WelcomeModal({ show = false }) {
  const [isFirstSeen, setFirstSeen] = useLocalStorage('is_first_seen', true);

  function closeModal() {
    setFirstSeen(false);
  }

  return (
    <Modal show={show || isFirstSeen}
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
               Этот сайт создан исключительно в <b>информационных целях</b> и содержит данные из <b>открытых источников</b>.
               Мы не можем гарантировать точность или актуальность предоставленной информации.
               Сайт не преследует коммерческих целей и предназначен для айти-специалистов — как местных, так и тех,
               кто планирует переезд в наш город. Ваши замечания и предложения можно отправить через Telegram.
             </p>
           )}
           footer={(
             <div className='flex items-center justify-center'>
               <Button widthClass='w-64' onClick={closeModal}>Закрыть</Button>
             </div>
           )} />
  );
}

export default WelcomeModal;
