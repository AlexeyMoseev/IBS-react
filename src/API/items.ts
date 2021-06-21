import { AxiosInstance } from "axios";
import {IItem} from "../models/item";
import {ICard} from "../models/card";

interface IItemsResponse {
  content: Array<IItem>
}

export class ApiItems {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
  getAll = () =>
    this.axios
      .get<IItemsResponse>(`/item`)
      .then((d) => d.data);
  getById = (id: string) =>
    this.axios.get<ICard>(`/item/${id}`).then((d) => d.data);
}
