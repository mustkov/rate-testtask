import React from "react";
import { useEffect } from "react";
import "./assets/styles/style.scss";
import { takeData } from "./action/takeData.js";
import { useDispatch } from "react-redux";
import Table from "./components/Table/Table";

function App() {
  const dispatch = useDispatch();

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
