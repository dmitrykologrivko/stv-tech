import FiltersModal from './FiltersModal.jsx';

export default {
  title: 'Components/Modals/FiltersModal',
  component: FiltersModal,
};

export const Default = () => (
  <FiltersModal show={true}
                filters={(
                  <form className='pt-4 pb-4'>
                    <div>
                      <input type='checkbox' value={0} id='filter1'/>
                      <label htmlFor='filter1'>Option 1</label>
                    </div>
                    <div>
                      <input type='checkbox' value={1} id='filter2'/>
                      <label htmlFor='filter2'>Option 2</label>
                    </div>
                  </form>
                )}/>
);
