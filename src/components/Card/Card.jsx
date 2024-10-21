function Card({ className, animOnHover = false, children }) {
  return (
    <div className={`${className} rounded overflow-hidden shadow-md bg-white
                     transform transition-transform duration-400
                     hover:cursor-pointer ${animOnHover ? 'hover:-translate-y-1' : ''} hover:shadow-lg`}>
      {children}
    </div>
  );
}

export default Card;
