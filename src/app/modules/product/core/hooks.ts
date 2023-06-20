import { useQuery } from "react-query"
import * as api from '../request/product'

const useProducts = () => {
    return useQuery('products', api.getProducts)
}

export { useProducts }