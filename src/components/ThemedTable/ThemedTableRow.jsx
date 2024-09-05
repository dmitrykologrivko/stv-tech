import TableRow from '../Table/TableRow.jsx';

const ThemedTableRow = ({ children, className }) => {
  return (
    <TableRow className={className}>
      {children}
    </TableRow>
  );
};

export default ThemedTableRow;
