const TableCell = ({ children, isHeader = false, className }) => {
  const Component = isHeader ? 'th' : 'td';
  return (
    <Component className={className}>
      {children}
    </Component>
  );
};

export default TableCell;
