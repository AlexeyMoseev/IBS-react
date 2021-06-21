import {PageIndex} from "../pages/index/PageIndex";

export interface IMenu{
  id: number
  component: any
  label: string
  href: string
  exact?: boolean
}

export const MENU: Array<IMenu> = [
  {
    id: 1,
    label: "Главная",
    href: "/:id?",
    exact: true,
    component: PageIndex
  },
]