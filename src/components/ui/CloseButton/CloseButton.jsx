function CloseButton({ onClick }) {
  return (
    <div className={`
          text-white bg-brand-500 rounded-full w-5 h-5 pb-0.5 flex items-center justify-center cursor-pointer
          hover:bg-brand-600
        `}
         onClick={onClick}>
      &times;
    </div>
  );
}

export default CloseButton;
