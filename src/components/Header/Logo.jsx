import regionFlag from '../../assets/region-flag.svg';

function Logo() {
  return (
    <div className="flex items-center text-brand-onprimary font-bold">
      <img src={regionFlag} className="h-10 pr-2" alt="Logo"/>
      IT26
    </div>
  );
}

export default Logo;
