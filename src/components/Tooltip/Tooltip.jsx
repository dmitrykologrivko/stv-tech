import { useState } from 'react';

const Tooltip = ({ text, width, height, position, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [selectedPosition] = useState(() => {
    const defaultPosition = 'left-1/2 bottom-full transform -translate-x-1/2 mb-2';

    if (position === 'top') {
      return defaultPosition;
    }
    if (position === 'right') {
      return 'left-full bottom-1/2 transform translate-y-1/2 ml-2';
    }
    if (position === 'bottom') {
      return 'left-1/2 top-full transform -translate-x-1/2 mt-2';
    }
    if (position === 'left') {
      return 'right-full bottom-1/2 transform translate-y-1/2 mr-2';
    }

    return defaultPosition;
  });

  return (
    <div className='relative inline-block'>
      <div className='cursor-pointer'
           onMouseEnter={() => setShowTooltip(true)}
           onMouseLeave={() => setShowTooltip(false)}>
        {children}
      </div>

      {showTooltip && (
        <div className={`absolute ${selectedPosition} p-1 text-sm text-white bg-black rounded-lg shadow-lg`}
             style={{ width, height }}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
