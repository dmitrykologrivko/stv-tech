import Modal from '../Modal/Modal.jsx';
import Button from '../Button/Button.jsx';
import CloseButton from '../CloseButton/CloseButton.jsx';

function FiltersModal({ show, onCloseModal, onApplyFilters, title, filters }) {
  return (
    <Modal show={show}
           onClose={onCloseModal}
           className='max-w-sm bg-white rounded p-4 mr-4 ml-4'
           header={(
             <div className='flex justify-between text-xl'>
               {title || 'Фильтры'}
               <CloseButton onClick={onCloseModal}/>
             </div>
           )}
           body={filters}
           footer={(
             <div className='flex items-center justify-center'>
               <Button onClick={onApplyFilters}>Применить</Button>
             </div>
           )}/>
  );
}

export default FiltersModal;
