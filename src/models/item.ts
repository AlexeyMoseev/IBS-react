export interface IItem {
  id: number,
  name: string,
  description: string,
  like: boolean,
  price: {
    currency: string,
    value: number
  }
  picture: {
    path: string,
    alt: string
  }
}