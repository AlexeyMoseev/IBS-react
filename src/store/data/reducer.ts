import { IItem } from "../../models/item";
import { ICard } from "../../models/card";
import { DataAction, IDataActionTypes } from "./types";

const initialState = {
  items: null as Array<IItem> | null,
  item: null as ICard | null,
  filtredItems: null as Array<IItem> | null
};
type IDataState = typeof initialState;

export const dataReducer = (
  state = initialState,
  action: DataAction
): IDataState => {
  switch (action.type) {
    case IDataActionTypes.DATA__SET_ITEMS:
      return { ...state, items: action.payload };
    case IDataActionTypes.DATA__SET_CARD:
      return { ...state, item: action.payload };
    case IDataActionTypes.DATA__SET_FILTRED_ITEMS:
      return { ...state, filtredItems: action.payload };
    case IDataActionTypes.DATA__SET_CHANGE_LIKE:
      return { ...state, item: action.payload };
    case IDataActionTypes.DATA__SET_CHANGE_LIKE_ITEM:
      return { ...state, items: action.payload };
      case IDataActionTypes.DATA__SET_CHANGE_LIKE_ITEM_FILTRED:
      return { ...state, filtredItems: action.payload };
    default:
      return state;
  }
};
