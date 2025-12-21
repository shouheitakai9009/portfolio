import { configureStore, bindActionCreators } from "@reduxjs/toolkit";
import appSlice, { actions } from "./slice";
import {
  useDispatch,
  useSelector as useReduxSelector,
  type TypedUseSelectorHook,
} from "react-redux";

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

// 型安全なuseSelectorフック
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
