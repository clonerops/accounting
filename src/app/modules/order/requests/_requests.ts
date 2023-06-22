import http from '../../../../_cloner/helpers/AxiosHelper'
import { ICreateOrder } from '../core/_models'

const createOrder = async (formdata: ICreateOrder) => {
    const { data } = await http.post('/orders/create', JSON.stringify(formdata), {
        headers: {
            'Content-Type': 'application/json'
        }
    }) 
    return data
}

export {
    createOrder
}