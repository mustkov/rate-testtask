import React from "react";
import { useState, useEffect } from "react";
import "./assets/styles/style.scss";
import { takeData } from "./action/takeData.js";
import { useDispatch, useSelector } from "react-redux";
import Table from "./components/Table/Table";

function App() {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos);

  const [base, setBase] = useState([]);

  useEffect(() => {
    dispatch(takeData());
  }, []);

  return (
    <div className="App container">
      <Table />
    </div>
  );
}

export default App;
