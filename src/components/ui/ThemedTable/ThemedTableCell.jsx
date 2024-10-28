import TableCell from '../Table/TableCell.jsx';

const ThemedTableCell = ({ children, isHeader = false, className }) => {
  return (
    <TableCell isHeader={isHeader}
               className={`${className} text-sm p-3 text-left border border-[#eceeef]
                           ${isHeader && 'bg-[#ECEEF7] border-r-white'}`}>
      {children}
    </TableCell>
  );
};

export default ThemedTableCell;
