import { useState } from "react";

const TableCell = ({ item }) => {
  return (
    <div className="table__cell">
      <div className="table__cell_item">{item}</div>
    </div>
  );
};

export default TableCell;
