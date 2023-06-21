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

export {
    createCustomer
}