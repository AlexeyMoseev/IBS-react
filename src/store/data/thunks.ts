import { GetState } from "../index";
import { data__setItem, data__setItems, data__setFiltredItems, data__setChangeLike, data__setChangeLikeItem, data__setChangeLikeItemFiltred } from "./actions";
import { API } from "../../API";
import { IItem } from '../../models/item'


/**
 * Получили все товары
 */
export const data__getItems = () => async (dispatch: any, getState: GetState) => {
  try {
    const items = await (await API.items.getAll()).content;
    dispatch(data__setItems(items))
  } catch (e) {
    console.error("Ошибка при запросе...", e)
  }
};

/**
 * Получили все товары по его ID
 */
export const data__getItemById = (id: string) => async (dispatch: any, getState: GetState) => {
  dispatch(data__setItem(null))
  try {
    const item = await API.items.getById(id);
    dispatch(data__setItem(!!item ? item : null))
  } catch (e) {
    console.error("Ошибка при запросе...", e)
  }
};

/**
 * Получили отфильтрованные товары
 */
export const data__getFiltredItems = (event: any) => async (dispatch: any, getState: GetState) => {
  try {
    const items = getState().data.items
    const query = event.target.value
    if (!items) return alert("items == null")
    const filtredItems = items.filter((element: IItem) => {
      return element.name.toLowerCase().includes(query.toLowerCase())
    })
    dispatch(data__setFiltredItems(filtredItems))
  } catch (e) {
    console.error("Ошибка при запросе...", e)
  }
};

/**
 * Изменить состояние кнопки 'избранное'
 */
export const data__changeLike = (event: any) => async (dispatch: any, getState: GetState) => {
  try {
    const item = getState().data.item
    if (!item) return 
    item.content.like = !item.content.like
    dispatch(data__setChangeLike(item))
  } catch (e) {
    console.error("Ошибка при запросе...", e)
  }
};

/**
 * Изменить состояние кнопки 'избранное' в списке товаров
 */
export const data__changeLikeItem = (event: any, index: number) => async (dispatch: any, getState: GetState) => {
  try {
    event.preventDefault()
    const items = getState().data.items
    if (!items) return
    items[index].like = !items[index].like
    dispatch(data__setChangeLikeItem(items))
  } catch (e) {
    console.error("Ошибка при запросе...", e)
  }
};

/**
 * Изменить состояние кнопки 'избранное' в отфильтрованном списке товаров
 */
 export const data__changeLikeItemFiltred = (event: any, index: number) => async (dispatch: any, getState: GetState) => {
  try {
    event.preventDefault()
    const filtredItems = getState().data.filtredItems
    if (!filtredItems) return
    filtredItems[index].like = !filtredItems[index].like
    dispatch(data__setChangeLikeItemFiltred(filtredItems))
  } catch (e) {
    console.error("Ошибка при запросе...", e)
  }
};