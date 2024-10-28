import Table from '../Table/Table.jsx';

const ThemedTable = ({ children, className }) => {
  return (
    <Table className={`${className} w-full max-w-full border-collapse bg-white`}>
      {children}
    </Table>
  );
};

export default ThemedTable;
