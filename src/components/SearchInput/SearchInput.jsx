import { useState, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce.js';

function SearchInput({ value = '', onChange, placeholder }) {
  const INPUT_DEBOUNCE_DELAY = 100;
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => setInputValue(value), [value]);

  const debouncedChange = useDebounce(() => {
    onChange(inputValue);
  }, INPUT_DEBOUNCE_DELAY);

  return (
    <div className='relative w-full'>
      <input className={`
              appearance-none w-full h-10 p-4 rounded-md bg-[#EEF3F8]
              focus:outline-none
            `}
             type='text'
             value={inputValue}
             placeholder={placeholder}
             onChange={(e) => {
               e.stopPropagation();
               setInputValue(e.target.value);
               debouncedChange();
             }}/>
      {inputValue?.length > 0 && (
        <div className='absolute top-[15%] right-4 text-xl cursor-pointer'
             onClick={() => {
               setInputValue('');
               onChange('');
             }}>
          &times;
        </div>
      )}
    </div>
  );
}

export default SearchInput;
