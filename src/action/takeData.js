import axios from "axios";
import { setFetchError, setIsFetching, setRepos } from "../reducers/repReducer";

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
