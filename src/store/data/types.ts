import {IItem} from "../../models/item";
import {ICard} from "../../models/card";

export enum IDataActionTypes {
  DATA__SET_ITEMS = "[DATA] SET_ITEMS",
  DATA__SET_CARD = "[DATA] SET_CARD",
  DATA__SET_FILTRED_ITEMS = "[DATA] SET_FILTRED_ITEMS",
  DATA__SET_CHANGE_LIKE = "[DATA] SET_CHANGE_LIKE",
  DATA__SET_CHANGE_LIKE_ITEM = "[DATA] SET_CHANGE_LIKE_ITEM",
  DATA__SET_CHANGE_LIKE_ITEM_FILTRED = "[DATA] SET_CHANGE_LIKE_ITEM_FILTRED",
}

// Типы ActionCreators
interface SetItemsAction {
  type: IDataActionTypes.DATA__SET_ITEMS;
  payload: Array<IItem> | null;
}
interface SetCardAction {
  type: IDataActionTypes.DATA__SET_CARD;
  payload: ICard | null;
}
interface SetFiltredItemsAction {
  type: IDataActionTypes.DATA__SET_FILTRED_ITEMS;
  payload: Array<IItem> | null;
}
interface SetChangeLike {
  type: IDataActionTypes.DATA__SET_CHANGE_LIKE;
  payload: ICard | null;
}
interface SetChangeLikeItem {
  type: IDataActionTypes.DATA__SET_CHANGE_LIKE_ITEM;
  payload: Array<IItem> | null;
}
interface SetChangeLikeItemFiltred {
  type: IDataActionTypes.DATA__SET_CHANGE_LIKE_ITEM_FILTRED;
  payload: Array<IItem> | null;
}

// Общий тип Action
export type DataAction =
  | SetItemsAction
  | SetCardAction
  | SetFiltredItemsAction
  | SetChangeLike
  | SetChangeLikeItem
  | SetChangeLikeItemFiltred
