import { IItem } from "../../models/item";
import { DataAction, IDataActionTypes } from "./types";
import { ICard } from "../../models/card";

/**
 * Записать ITEMS в store
 * @param items
 */
export const data__setItems = (items: Array<IItem> | null): DataAction => ({
  type: IDataActionTypes.DATA__SET_ITEMS,
  payload: items,
});
/**
 * Записать ITEM в store
 * @param item
 */
export const data__setItem = (item: ICard | null): DataAction => ({
  type: IDataActionTypes.DATA__SET_CARD,
  payload: item,
});
/**
 * Записать отфильтрованные ITEMS в store
 * @param filtredItems
 */
export const data__setFiltredItems = (filtredItems: Array<IItem> | null): DataAction => ({
  type: IDataActionTypes.DATA__SET_FILTRED_ITEMS,
  payload: filtredItems,
});
/**
 * Записать измененное значние like в store
 * @param item
 */
export const data__setChangeLike = (item: ICard | null): DataAction => ({
  type: IDataActionTypes.DATA__SET_CHANGE_LIKE,
  payload: item,
});
/**
 * Записать измененное значние like в списке товаров в store
 * @param items
 */
export const data__setChangeLikeItem = (items: Array<IItem> | null ) : DataAction => ({
  type: IDataActionTypes.DATA__SET_CHANGE_LIKE_ITEM,
  payload: items
});
/**
 * Записать измененное значние like в отфильтрованном списке товаров в store
 * @param filtredItems
 */
 export const data__setChangeLikeItemFiltred = (filtredItems: Array<IItem> | null ) : DataAction => ({
  type: IDataActionTypes.DATA__SET_CHANGE_LIKE_ITEM_FILTRED,
  payload: filtredItems
});
