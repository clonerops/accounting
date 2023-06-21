import * as api from "../requests/_request";
import { useQuery } from "react-query";

const useStores = () => {
    return useQuery("stores", api.getStore);
};

export {
    useStores
}