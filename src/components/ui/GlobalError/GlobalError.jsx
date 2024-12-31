import { Button } from '../index.js';
import codeBrackets from '../../../assets/code-brackets.svg';

function GlobalError({ error, description, buttonLabel, onClick }) {
  return (
    <div className='max-w-80 flex flex-col justify-center items-center'>
      <img src={codeBrackets} className="w-20 h-20" alt="Error Image"/>
      <h1 className='font-bold'>{error}</h1>
      <p className='text-center pb-4'>{description}</p>
      <Button onClick={onClick}>{buttonLabel}</Button>
    </div>
  );
}

export default GlobalError;
