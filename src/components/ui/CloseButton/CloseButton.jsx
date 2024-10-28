function CloseButton({ onClick }) {
  return (
    <div className={`
          text-white bg-brand-primary rounded-full w-5 h-5 pb-0.5 flex items-center justify-center cursor-pointer
          hover:bg-brand-primary-hover
        `}
         onClick={onClick}>
      &times;
    </div>
  );
}

export default CloseButton;
