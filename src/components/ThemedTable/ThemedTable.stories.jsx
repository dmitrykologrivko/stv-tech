import ThemedTable from './ThemedTable.jsx';
import ThemedTableHeader from './ThemedTableHeader.jsx';
import ThemedTableBody from './ThemedTableBody.jsx';
import ThemedTableRow from './ThemedTableRow.jsx';
import ThemedTableCell from './ThemedTableCell.jsx';

export default {
  title: 'Components/Tables/ThemedTable',
  component: ThemedTable
}

export const Default = () => {
  const data = [
    { name: 'John Doe', age: 28, job: 'Developer' },
    { name: 'Jane Smith', age: 32, job: 'Designer' },
    { name: 'Sam Johnson', age: 45, job: 'Manager' },
  ];

  return (
    <ThemedTable>
      <ThemedTableHeader>
        <ThemedTableCell isHeader>Name</ThemedTableCell>
        <ThemedTableCell isHeader>Age</ThemedTableCell>
        <ThemedTableCell isHeader>Job</ThemedTableCell>
      </ThemedTableHeader>
      <ThemedTableBody>
        {data.map((item, index) => (
          <ThemedTableRow key={index}>
            <ThemedTableCell>{item.name}</ThemedTableCell>
            <ThemedTableCell>{item.age}</ThemedTableCell>
            <ThemedTableCell>{item.job}</ThemedTableCell>
          </ThemedTableRow>
        ))}
      </ThemedTableBody>
    </ThemedTable>
  );
};
