import React, { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
import ReactHover, { Trigger, Hover } from "react-hover";
import HoverComponent from "../HoverComponent/HoverComponent";
import { takeLatestData } from "../../action/takeData";
import { useDispatch } from "react-redux";
// import { currentDate } from "/src/action/takeCurrentDate";
// import { currentMonth } from "/src/action/takeCurrentMonth";

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

// function Click(data) {
//   const [date, setDate] = useState(currentDate());

//   let timerId = setInterval(() => {
//     setDate((prevDate) => prevDate - 1);
//     takeLatestData(data.CharCode, date);
//     console.log(date);
//     // dispatch(takeLatestData(data.CharCode, ));
//   }, 250);
//   setTimeout(() => {
//     clearInterval(timerId);
//     console.log("end");
//     console.log(date);
//   }, 2500);
// }

export default function Table() {
  const dispatch = useDispatch();
  const data = useSelector(({ repos }) => repos.data.Valute);

  const [date, setDate] = useState(currentDate());
  const [month, setMonth] = useState(currentMonth());

  // const useClick = () =>
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setDate(date - 1);
  //       // console.log(date);
  //     }, 250);

  //     return () => {
  //       clearInterval(interval);
  //       console.log("end, date=", date);
  //     };
  //   }, [date]);

  // const click = (data) => {
  //   let timerId = setInterval(() => {
  //     setDate((prevDate) => prevDate - 1);
  //     takeLatestData(data.CharCode, date);
  //     console.log(date);
  //     // dispatch(takeLatestData(data.CharCode, ));
  //   }, 250);
  //   setTimeout(() => {
  //     clearInterval(timerId);
  //     console.log("end");
  //     console.log(date);
  //   }, 2500);
  //   // dispatch(takeLatestData(data.CharCode));
  // };

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
