import http from '../../../../_cloner/helpers/AxiosHelper'

const getProducts = async () => {
    const { data } = await http.get('/products')
    return data
}

export { 
    getProducts
}