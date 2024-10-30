function HeaderNavItem({ children }) {
  return (
    <div className={`p-2 cursor-pointer uppercase transition duration-100 ease-in-out
                     hover:bg-brand-600 hover:rounded`}>
      {children}
    </div>
  );
}

export default HeaderNavItem;
