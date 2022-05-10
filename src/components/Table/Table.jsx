import React from "react";
import { useSelector } from "react-redux";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
import ReactHover, { Trigger, Hover } from "react-hover";
import HoverComponent from "../HoverComponent/HoverComponent";

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 5,
  shiftY: 5,
};

const now = new Date();
const currentMonthTake = String(1 + now.getMonth());
const currentDateTake = String(now.getDate());

export const currentMonth = () => {
  if (currentMonthTake.length === 1) {
    return 0 + currentMonthTake;
  } else {
    return currentMonthTake;
  }
};

export const currentDate = () => {
  if (currentDateTake.length === 1) {
    return 0 + currentDateTake;
  } else {
    return currentDateTake;
  }
};

export default function Table() {
  const data = useSelector(({ repos }) => repos.data.Valute);

  return data ? (
    <div className="table">
      <TableHeader />
      {data.map((data, id) => (
        <ReactHover key={id} options={optionsCursorTrueWithMargin}>
          <Trigger type="trigger">
            <TableRow data={data} onClick={() => console.log("dsds")} />
          </Trigger>
          <Hover type="hover">
            <HoverComponent data={data} />
          </Hover>
        </ReactHover>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}
