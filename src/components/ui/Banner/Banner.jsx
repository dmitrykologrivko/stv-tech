function Banner({ children }) {
  return (
    <div className='p-4 bg-primary-50 border border-primary-300 rounded-lg text-primary-800'>
      {children}
    </div>
  );
}

export default Banner;
