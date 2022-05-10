import TableCell from "../TableCell/TableCell";

const TableRow = (props) => {
  const { CharCode, Value, Previous } = props.data;

  const percent = (currentValue, oldValue) => {
    return (
      Math.round(((currentValue - oldValue) / currentValue) * 100 * 100) / 100
    );
  };
  return (
    <div className="table__row" onClick={props.onClick}>
      <TableCell item={CharCode} />
      <TableCell item={Value} />
      <TableCell percent={percent(Value, Previous)} />
    </div>
  );
};

export default TableRow;
