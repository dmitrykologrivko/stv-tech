function HeaderNavItem({ children }) {
  return (
    <div className={`p-2 cursor-pointer uppercase transition duration-100 ease-in-out
                     hover:bg-brand-primary-hover hover:rounded`}>
      {children}
    </div>
  );
}

export default HeaderNavItem;
