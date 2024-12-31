import code from '../../../assets/code.svg';

function Logo() {
  return (
    <div className="flex items-center text-white font-bold">
      <img src={code} className="h-10 pr-2" alt="Logo"/>
      STAV IT
    </div>
  );
}

export default Logo;