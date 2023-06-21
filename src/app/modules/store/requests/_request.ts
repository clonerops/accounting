import http from '../../../../_cloner/helpers/AxiosHelper'

const getStore = async () => {
    const { data } = await http.get('/stores')
    return data
}

export { 
    getStore
}