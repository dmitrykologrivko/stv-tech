import { Banner, CloseButton } from '../ui';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import { useContentHeightContext } from '../../hooks/available-height/ContentHeightContext.jsx';
import smile from '../../assets/smile.svg';

function WelcomeBanner() {
  const [isFirstSeen, setFirstSeen] = useLocalStorage('is_first_seen', true);

  const { recalculateAvailableHeight } = useContentHeightContext();

  function closeBanner() {
    setFirstSeen(false);
    recalculateAvailableHeight();
  }

  return (
    <>
      {isFirstSeen && (
        <div className='pt-4 pl-4 pr-4'>
          <Banner>
            <div className='flex justify-center items-center text-xl mb-2 relative'>
              Добро пожаловать!
              <img src={smile} className="h-6 pl-1" alt="Smile"/>
              <div className='absolute top-0 right-0'>
                <CloseButton onClick={closeBanner}/>
              </div>
            </div>
            <p>
              Этот сайт создан исключительно в <b>информационных целях</b> и содержит данные из <b>открытых
              источников</b>.
              Мы не можем гарантировать точность или актуальность предоставленной информации.
              Сайт не преследует коммерческих целей и предназначен для айти-специалистов — как местных, так и тех,
              кто планирует переезд в наш город. Ваши замечания и предложения можно отправить через Telegram.
            </p>
          </Banner>
        </div>
      )}
    </>
  );
}

export default WelcomeBanner;
