import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle.js';
import NoContent from '../../components/NoContent/NoContent.jsx';
import telegramLogo from '../../assets/telegram-black.svg';
import vkLogo from '../../assets/vk-black.svg';

function CommunitiesPage() {
  const communities = useLoaderData();

  useTitle('Сообщества');

  function getSocialNetworkIconByType(type) {
    if (type === 'telegram') {
      return telegramLogo;
    }
    if (type === 'vk') {
      return vkLogo;
    }
    return null;
  }

  return (
    <div className='p-4'>
      {communities && communities.length > 0
        ? (
          <>
            {communities.map((item, index) => (
              <div key={index}>
                <h1 className='text-xl mb-4'>{item.name}</h1>
                <ul className='mb-4'>
                  {item.communities.map((item, index) => (
                    <li key={index} className='pb-4'>
                      <img src={getSocialNetworkIconByType(item.link_type)}
                           className="w-4 h-4 mt-1 mr-1 float-left"
                           alt="Social Network Logo"/>
                      <a className='mr-1 underline font-medium float-left' href={item.link} target='_blank'>{item.link_description}</a>
                      <span>{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
          // <>
          //   <ul>
          //     {communities.map((item, index) => (
          //       <li key={index} className='pb-2'>
          //         <img src={telegramLogo} className="w-4 h-4 ml-2" alt="Telegram Logo"/>
          //
          //         <span>{` - ${item.description}`}</span>
          //       </li>
          //     ))}
          //   </ul>
          // </>
        )
        : (
          <div className='flex justify-center pt-16'>
            <NoContent/>
          </div>
        )
      }
    </div>
  );
}

export default CommunitiesPage;
