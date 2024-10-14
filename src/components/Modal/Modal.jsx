import { createPortal } from 'react-dom';

function Modal(props) {
  if (!props.show) {
    return <></>;
  }

  return (
    createPortal(
      <div className={`fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center
                       bg-black bg-opacity-70 z-[1001]`}
           onClick={props.onClose}>
        <div className={props.className || ''} onClick={e => e.stopPropagation()}>
          <div>{props.header}</div>
          <div>{props.body}</div>
          <div>{props.footer}</div>
        </div>
      </div>,
      document.getElementById('root')
    )
  );
}

export default Modal;
