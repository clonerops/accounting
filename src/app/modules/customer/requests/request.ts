import { ICreateCustomer } from "../core/_models"
import http from '../../../../_cloner/helpers/AxiosHelper'

const createCustomer = async (formData: ICreateCustomer) => {
    const { data } = await http.post('/customers/create', JSON.stringify(formData), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return data
}

const customerLists = async () => {
    const { data } = await http.get('/customers')
    return data
}

export {
    createCustomer,
    customerLists
}