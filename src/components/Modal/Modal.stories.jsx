import Modal from './Modal.jsx';

export default {
    title: 'Components/Modals/BaseModal',
    component: Modal,
};

export const Default = () => (
  <Modal show={true}
         header={<h4>This is title</h4>}
         body={<p>This is content</p>}
         footer={<button>Close</button>} />
);
