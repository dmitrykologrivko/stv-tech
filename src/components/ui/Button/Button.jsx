function Button({ children, widthClass = '', onClick }) {
  return (
    <button className={`
              ${widthClass || 'w-full'} text-center text-primary-950 py-2 px-6
              rounded-lg button-shadow bg-primary-500
              hover:bg-primary-600 transition transform duration-300 ease-in-out
            `}
            onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
