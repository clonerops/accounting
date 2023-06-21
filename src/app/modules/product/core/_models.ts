export interface IProductProps {
    products: IProducts[]
    stores: IStores[]
}

export interface IProducts {
    id: number
    title: string
    description: string
}
export interface IStores {
    id: number
    title: string
    description: string
}
export interface ICustomers {
    id: number
    firstName: string
    lastName: string
    mobile: string
}

export interface IDropdown {
    id: number
    text: string
}