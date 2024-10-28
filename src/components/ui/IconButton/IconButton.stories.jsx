import IconButton from './IconButton.jsx';
import filterIcon from '../../../assets/filter.svg';

export default {
  title: 'UI/Buttons/IconButton',
  component: IconButton
}

export const Default = () => (
  <div className='w-14'>
    <IconButton icon={filterIcon}/>
  </div>
);
