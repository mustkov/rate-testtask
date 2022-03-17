import TableCell from "../TableCell/TableCell";

const TableRow = ({ data }) => {
  const { CharCode, Value, Previous } = data;

  const percent = (currentValue, oldValue) => {
    // if (currentValue > oldValue) {
    return `${
      Math.round(((currentValue - oldValue) / currentValue) * 100 * 100) / 100
    } %`;
    // } else {
    //   return (
    //     Math.round(((oldValue - currentValue) / currentValue) * 100 * 100) / 100
    //   );
    // }
  };
  return (
    <div className="table__row">
      <TableCell item={CharCode} />
      <TableCell item={Value} />
      <TableCell item={percent(Value, Previous)} />
    </div>
  );
};

export default TableRow;
