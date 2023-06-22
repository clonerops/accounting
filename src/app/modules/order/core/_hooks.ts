import { useMutation } from "react-query";
import * as api from '../requests/_requests'

const useCreateOrder = () => {
    return useMutation(api.createOrder, {
        onSuccess: () => {
            alert('سفارش با موفقیت ثبت گردید')
        }
    })
}

export {
    useCreateOrder
}