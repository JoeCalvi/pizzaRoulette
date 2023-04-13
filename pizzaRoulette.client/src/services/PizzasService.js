import { AppState } from "../AppState";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class PizzasService {

    async createPizza(pizzaData) {
        const res = await api.post('api/pizzas', pizzaData)
        AppState.pizza = res.data

        const toppingCount = AppState.pizza.toppings
        for (let i = 0; i <= (toppingCount - 1); i++) {
            let roll = Math.floor(Math.random() * (AppState.toppings.length))
            let topping = AppState.toppings[roll]
            const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
            logger.log(pizzaTopping.data)
        }
    }

    async getPizzaById(pizzaId) {
        const res = await api.get(`api/pizzas/${pizzaId}`)
        AppState.pizza = res.data
    }

    async getToppingsByPizzaId(pizzaId) {
        const res = await api.get(`api/pizzas/${pizzaId}/toppings`)
        logger.log(res.data)
    }
}

export const pizzasService = new PizzasService();