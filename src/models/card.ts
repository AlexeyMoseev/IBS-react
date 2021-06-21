export interface ICard {
    content: {
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
        info: string,
        details: string
    }
}