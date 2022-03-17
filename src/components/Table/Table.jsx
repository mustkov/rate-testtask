import React from "react";
import { useSelector } from "react-redux";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";

export default function Table() {
  const data = useSelector(({ repos }) => repos.data.Valute);
  console.log(data);
  return data ? (
    <div className="table">
      <TableHeader />
      {data.map((data, id) => (
        <TableRow key={id} data={data} />
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}
