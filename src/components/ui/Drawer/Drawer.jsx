import { createPortal } from 'react-dom';

function Drawer({ isOpen, toggleDrawer, children }) {
  return (
    createPortal(
      <div>
        {/* Drawer Menu */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-white text-white
                         transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                         transition-transform duration-300 ease-in-out z-40`}>
          {children}
        </div>

        {/* Overlay */}
        <div onClick={toggleDrawer}
             className={`${isOpen ? 'fixed' : 'hidden'} inset-0 bg-black bg-opacity-50 z-30`}/>
      </div>,
      document.getElementById('root')
    )
  );
}

export default Drawer;
