import telegramLogo from '../../assets/telegram-black.svg';
import vkLogo from '../../assets/vk-black.svg';

function CommunitiesList({ communities }) {
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
    <>
      {communities.map((item, index) => (
        <div key={index}>
          <h1 className='text-xl mb-4'>{item.name}</h1>
          <ul className='mb-4'>
            {item.communities.map((item, index) => (
              <li key={index} className='pb-4'>
                <img src={getSocialNetworkIconByType(item.link_type)}
                     className='w-4 h-4 mt-1 mr-1 float-left'
                     alt='Social Network Logo'/>
                <a className='mr-1 underline font-medium float-left' href={item.link} target='_blank'>
                  {item.link_description}
                </a>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default CommunitiesList;
