import { logger } from "../utils/Logger"
import { api } from "./AxiosService";

class ToppingsService {

    async getAllToppings() {
        const res = await api.get('api/toppings')
        logger.log(res.data)
    }
}

export const toppingsService = new ToppingsService();