function Banner({ children }) {
  return (
    <div className='p-4 bg-brand-50 border border-brand-300 rounded-lg text-brand-800'>
      {children}
    </div>
  );
}

export default Banner;
