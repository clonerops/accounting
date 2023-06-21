import { useMutation } from "react-query"
import * as api from '../requests/request'
import { ICreateCustomer } from "./_models"

const useCreateCustomer = () => {
    return useMutation(api.createCustomer, {
        onSuccess: () => {
            alert('اطلاعات مشتری جدید با موفقیت ایجاد گردید!')
        }
    })
}

export {
    useCreateCustomer
}