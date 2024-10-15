import Tooltip from './Tooltip.jsx';

export default {
  title: 'Components/Tooltip',
  component: Tooltip
}

export const Default = () => (
  <div className="flex justify-center items-center h-screen">
    <Tooltip text="Это тултип!">
      <div className="px-4 py-2 text-white bg-brand-primary">
        <span>Наведи на меня</span>
      </div>
    </Tooltip>
  </div>
);
