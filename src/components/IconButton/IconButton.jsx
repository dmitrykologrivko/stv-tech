function IconButton({ widthClass = '', heightClass = '', onClick, icon }) {
  return (
    <button className={`${widthClass || 'w-10'} ${heightClass} p-2 rounded-md bg-[#EEF3F8]`}
            onClick={onClick}>
      <img src={icon} className="" alt="Icon"/>
    </button>
  );
}

export default IconButton;
