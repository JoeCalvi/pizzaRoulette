import { AppState } from "../AppState";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class PizzasService {

    async createPizza(pizzaData) {
        const res = await api.post('api/pizzas', pizzaData)
        AppState.pizza = res.data
    }
}

export const pizzasService = new PizzasService();