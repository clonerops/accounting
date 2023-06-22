export interface ICreateOrder {
    totalAmount: string
    description: string
    settlementDate: string
    customerId: number
    order_details: IOrderDetail[]
}

export interface IOrderDetail {
    amount: string
    quantity: string
    customerId: number
    productId: number
    storeId: number
}