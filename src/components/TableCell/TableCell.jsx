import { useState } from "react";

const TableCell = ({ item, percent }) => {
  return (
    <div className="table__cell">
      <div className="table__cell_item">
        {typeof percent === "number" ? (
          percent > 0 ? (
            <div className="green">{percent} ▲</div>
          ) : (
            <div className="red">{percent} ▼</div>
          )
        ) : (
          item
        )}
      </div>
    </div>
  );
};

export default TableCell;
