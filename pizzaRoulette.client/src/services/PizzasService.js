import { AppState } from "../AppState";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class PizzasService {

    async createPizza(pizzaData) {
        const res = await api.post('api/pizzas', pizzaData)
        AppState.pizza = res.data
        const toppingCount = AppState.pizza.toppings
        for (let i = 0; i <= (toppingCount - 1); i++) {
            if (AppState.pizza.crazy == true) {
                let roll = Math.floor(Math.random() * (AppState.toppings.length))
                let topping = AppState.toppings[roll]
                const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                logger.log("crazy pizza:", pizzaTopping.data)
            } else if (AppState.pizza.crazy == false) {

                if (AppState.pizza.pizzaFrom == "Domino's" && AppState.pizza.restriction == "None") {
                    let dominosToppings = AppState.toppings.filter(t => t.dominos == true)
                    let roll = Math.floor(Math.random() * (dominosToppings.length))
                    let topping = dominosToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    logger.log("dominos:", pizzaTopping.data)

                } else if (AppState.pizza.pizzaFrom == "Domino's" && AppState.pizza.restriction == "Vegetarian") {
                    let dominosToppings = AppState.toppings.filter(t => t.dominos == true && t.type == "Vegetable")
                    let roll = Math.floor(Math.random() * (dominosToppings.length))
                    let topping = dominosToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    logger.log("dominos:", pizzaTopping.data)

                } else if (AppState.pizza.pizzaFrom == "Domino's" && AppState.pizza.restriction == "Nut Allergy") {
                    let dominosToppings = AppState.toppings.filter(t => t.dominos == true && t.type != "Nut" && t.name != "Pesto")
                    let roll = Math.floor(Math.random() * (dominosToppings.length))
                    let topping = dominosToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    logger.log("dominos:", pizzaTopping.data)

                }
                else if (AppState.pizza.pizzaFrom == "Little Caesar's") {
                    let caesarsToppings = AppState.toppings.filter(t => t.littleCaesars == true)
                    let roll = Math.floor(Math.random() * (caesarsToppings.length))
                    let topping = caesarsToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    logger.log("little caesars:", pizzaTopping.data)
                } else if (AppState.pizza.pizzaFrom == "Papa John's") {
                    let johnsToppings = AppState.toppings.filter(t => t.papaJohns == true)
                    let roll = Math.floor(Math.random() * (johnsToppings.length))
                    let topping = johnsToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    logger.log("papa johns:", pizzaTopping.data)
                } else if (AppState.pizza.pizzaFrom == "Papa Murphy's") {
                    let murphysToppings = AppState.toppings.filter(t => t.papaMurphys == true)
                    let roll = Math.floor(Math.random() * (murphysToppings.length))
                    let topping = murphysToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    logger.log("papa murphys:", pizzaTopping.data)
                } else if (AppState.pizza.pizzaFrom == "Pizza Hut") {
                    let hutToppings = AppState.toppings.filter(t => t.pizzaHut == true)
                    let roll = Math.floor(Math.random() * (hutToppings.length))
                    let topping = hutToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    logger.log("pizza hut:", pizzaTopping.data)
                }
            }
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