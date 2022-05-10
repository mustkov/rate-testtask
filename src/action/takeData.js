import axios from "axios";
import {
  setFetchError,
  setIsFetching,
  setRepos,
  setLatestData,
} from "../reducers/repReducer";

// import { currentDate } from "./takeCurrentDate";
// import { currentMonth } from "./takeCurrentMonth";

export const takeData = () => {
  return async (dispatch) => {
    try {
      const apiUrl = "https://www.cbr-xml-daily.ru/daily_json.js";
      dispatch(setIsFetching(true));
      const response = await axios.get(apiUrl);
      dispatch(setRepos(response.data));
    } catch (e) {
      console.log(e, new Error("Ошибка запроса API!"));
      dispatch(setFetchError(true));
      dispatch(setIsFetching(false));
      setTimeout(() => {
        dispatch(setIsFetching(false));
      }, 100);
    }
  };
};

export const takeLatestData = (code, date) => {
  // const now = new Date();
  // const currentDateTake = String(now.getDate());
  // const currentMonthTake = String(1 + now.getMonth());
  console.log(code, date);

  return async (dispatch) => {
    try {
      const apiUrl = `https://www.cbr-xml-daily.ru/archive/2022/02/12/daily_json.js`; // dispatch(setIsFetching(true));
      const response = await axios.get(apiUrl);
      const day = new Date(response.data.Date).getDate();
      const data = { code: code, [day]: response.data.Valute[code].Value };
      dispatch(setLatestData(data));
      console.log(response.data);
    } catch (e) {
      console.log(e, new Error("Ошибка запроса API!"));
      // dispatch(setFetchError(true));
      // dispatch(setIsFetching(false));
      // setTimeout(() => {
      //   dispatch(setIsFetching(false));
      // }, 100);
    }
  };
};
