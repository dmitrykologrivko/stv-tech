function Button({ children, onClick }) {
  return (
    <button className={`w-full text-center text-brand-onprimary py-2 px-6 rounded-lg button-shadow bg-brand-primary
                        hover:bg-brand-primary-hover transition transform duration-300 ease-in-out`}
            onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
