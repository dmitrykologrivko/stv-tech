import Tooltip from './Tooltip.jsx';

export default {
  title: 'UI/Tooltip',
  component: Tooltip
}

export const Default = () => (
  <div className="flex justify-center items-center h-screen">
    <Tooltip text="Это тултип!">
      <div className="px-4 py-2 text-white bg-primary-500">
        <span>Наведи на меня</span>
      </div>
    </Tooltip>
  </div>
);
