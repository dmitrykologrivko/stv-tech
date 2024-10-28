import Table from './Table.jsx';
import TableHeader from './TableHeader.jsx';
import TableBody from './TableBody.jsx';
import TableRow from './TableRow.jsx';
import TableCell from './TableCell.jsx';

export default {
  title: 'UI/Tables/Table',
  component: Table
}

export const Default = () => {
  const data = [
    { name: 'John Doe', age: 28, job: 'Developer' },
    { name: 'Jane Smith', age: 32, job: 'Designer' },
    { name: 'Sam Johnson', age: 45, job: 'Manager' },
  ];

  return (
    <Table>
      <TableHeader>
        <TableCell isHeader>Name</TableCell>
        <TableCell isHeader>Age</TableCell>
        <TableCell isHeader>Job</TableCell>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell>{item.job}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
