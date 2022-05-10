const SET_REPOS = "SET_REPOS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_FETCH_ERROR = "SET_FETCH_ERROR";
const SET_LATEST_DATA = "SET_LATEST_DATA";

const defaultStore = {
  isFetching: true,
  isFetchError: false,
  data: {},
  latestData: {},
};

export default function repReducer(state = defaultStore, action) {
  switch (action.type) {
    case SET_LATEST_DATA:
      return {
        ...state,
        latestData: { ...action.payload },
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: false,
      };
    case SET_FETCH_ERROR:
      return {
        ...state,
        isFetchError: action.payload,
      };
    case SET_REPOS:
      return {
        ...state,
        data: {
          ...action.payload,
          Valute: Object.values(action.payload.Valute),
        },
      };

    default:
      return state;
  }
}

export const setRepos = (repos) => ({
  type: SET_REPOS,
  payload: repos,
});
export const setIsFetching = (bool) => ({
  type: SET_IS_FETCHING,
  payload: bool,
});
export const setFetchError = (bool) => ({
  type: SET_FETCH_ERROR,
  payload: bool,
});
export const setLatestData = (data) => ({
  type: SET_LATEST_DATA,
  payload: data,
});
