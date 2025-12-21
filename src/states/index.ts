import { configureStore, bindActionCreators } from "@reduxjs/toolkit";
import appSlice, { actions } from "./slice";
import { useDispatch, useSelector as useReduxSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useSelector: typeof useReduxSelector<RootState["app"]> =
  useReduxSelector;

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
