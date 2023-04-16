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
                // logger.log("crazy pizza:", pizzaTopping.data)
            } else if (AppState.pizza.crazy == false) {

                // SECTION Domino's filters
                if (AppState.pizza.pizzaFrom == "Domino's" && AppState.pizza.restriction == "None") {
                    let dominosToppings = AppState.toppings.filter(t => t.dominos == true)
                    let roll = Math.floor(Math.random() * (dominosToppings.length))
                    let topping = dominosToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    // logger.log("dominos:", pizzaTopping.data)

                } else if (AppState.pizza.pizzaFrom == "Domino's" && AppState.pizza.restriction == "Vegetarian") {
                    let dominosToppings = AppState.toppings.filter(t => t.dominos == true && t.type != "Meat")
                    let roll = Math.floor(Math.random() * (dominosToppings.length))
                    let topping = dominosToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    // logger.log("dominos:", pizzaTopping.data)

                } else if (AppState.pizza.pizzaFrom == "Domino's" && AppState.pizza.restriction == "Nut Allergy") {
                    let dominosToppings = AppState.toppings.filter(t => t.dominos == true && t.type != "Nut" && t.name != "Pesto")
                    let roll = Math.floor(Math.random() * (dominosToppings.length))
                    let topping = dominosToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    // logger.log("dominos:", pizzaTopping.data)

                    // SECTION Little Caesar's filters
                } else if (AppState.pizza.pizzaFrom == "Little Caesar's" && AppState.pizza.restriction == "None") {
                    let caesarsToppings = AppState.toppings.filter(t => t.littleCaesars == true)
                    let roll = Math.floor(Math.random() * (caesarsToppings.length))
                    let topping = caesarsToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    // logger.log("little caesars:", pizzaTopping.data)
                } else if (AppState.pizza.pizzaFrom == "Little Caesar's" && AppState.pizza.restriction == "Vegetarian") {
                    let caesarsToppings = AppState.toppings.filter(t => t.littleCaesars == true && t.type != "Meat")
                    let roll = Math.floor(Math.random() * (caesarsToppings.length))
                    let topping = caesarsToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    // logger.log("little caesars:", pizzaTopping.data)
                } else if (AppState.pizza.pizzaFrom == "Little Caesar's" && AppState.pizza.restriction == "Nut Allergy") {
                    let caesarsToppings = AppState.toppings.filter(t => t.littleCaesars == true && t.type != "Nut" && t.name != "Pesto")
                    let roll = Math.floor(Math.random() * (caesarsToppings.length))
                    let topping = caesarsToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    // logger.log("little caesars:", pizzaTopping.data)

                    // SECTION Papa John's filters
                } else if (AppState.pizza.pizzaFrom == "Papa John's" && AppState.pizza.restriction == "None") {
                    let johnsToppings = AppState.toppings.filter(t => t.papaJohns == true)
                    let roll = Math.floor(Math.random() * (johnsToppings.length))
                    let topping = johnsToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    // logger.log("papa johns:", pizzaTopping.data)
                } else if (AppState.pizza.pizzaFrom == "Papa John's" && AppState.pizza.restriction == "Vegetarian") {
                    let johnsToppings = AppState.toppings.filter(t => t.papaJohns == true && t.type != "Meat")
                    let roll = Math.floor(Math.random() * (johnsToppings.length))
                    let topping = johnsToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    // logger.log("papa johns:", pizzaTopping.data)
                } else if (AppState.pizza.pizzaFrom == "Papa John's" && AppState.pizza.restriction == "Nut Allergy") {
                    let johnsToppings = AppState.toppings.filter(t => t.papaJohns == true && t.type != "Nut" && t.name != "Pesto")
                    let roll = Math.floor(Math.random() * (johnsToppings.length))
                    let topping = johnsToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    // logger.log("papa johns:", pizzaTopping.data)

                    // SECTION Papa Murphy's filters
                } else if (AppState.pizza.pizzaFrom == "Papa Murphy's" && AppState.pizza.restriction == "None") {
                    let murphysToppings = AppState.toppings.filter(t => t.papaMurphys == true)
                    let roll = Math.floor(Math.random() * (murphysToppings.length))
                    let topping = murphysToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    // logger.log("papa murphys:", pizzaTopping.data)
                } else if (AppState.pizza.pizzaFrom == "Papa Murphy's" && AppState.pizza.restriction == "Vegetarian") {
                    let murphysToppings = AppState.toppings.filter(t => t.papaMurphys == true && t.type != "Meat")
                    let roll = Math.floor(Math.random() * (murphysToppings.length))
                    let topping = murphysToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    // logger.log("papa murphys:", pizzaTopping.data)
                } else if (AppState.pizza.pizzaFrom == "Papa Murphy's" && AppState.pizza.restriction == "Nut Allergy") {
                    let murphysToppings = AppState.toppings.filter(t => t.papaMurphys == true && t.type != "Nut" && t.name != "Pesto")
                    let roll = Math.floor(Math.random() * (murphysToppings.length))
                    let topping = murphysToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    // logger.log("papa murphys:", pizzaTopping.data)

                    // SECTION Pizza Hut filters
                } else if (AppState.pizza.pizzaFrom == "Pizza Hut" && AppState.pizza.restriction == "None") {
                    let hutToppings = AppState.toppings.filter(t => t.pizzaHut == true)
                    let roll = Math.floor(Math.random() * (hutToppings.length))
                    let topping = hutToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    // logger.log("pizza hut:", pizzaTopping.data)
                } else if (AppState.pizza.pizzaFrom == "Pizza Hut" && AppState.pizza.restriction == "Vegetarian") {
                    let hutToppings = AppState.toppings.filter(t => t.pizzaHut == true && t.type != "Meat")
                    let roll = Math.floor(Math.random() * (hutToppings.length))
                    let topping = hutToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    // logger.log("pizza hut:", pizzaTopping.data)
                } else if (AppState.pizza.pizzaFrom == "Pizza Hut" && AppState.pizza.restriction == "Nut Allergy") {
                    let hutToppings = AppState.toppings.filter(t => t.pizzaHut == true && t.type != "Nut" && t.name != "Pesto")
                    let roll = Math.floor(Math.random() * (hutToppings.length))
                    let topping = hutToppings[roll]
                    const pizzaTopping = await api.post(`api/pizzaToppings`, { pizzaId: AppState.pizza.id, toppingId: topping.id })
                    // logger.log("pizza hut:", pizzaTopping.data)
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
        AppState.pizzaToppings = res.data
        logger.log(AppState.pizzaToppings)
    }

    async respinPizzaTopping(toppingId, pizzaToppingId, pizzaId) {
        const res1 = await api.delete(`api/pizzaToppings/${pizzaToppingId}`)
        logger.log(res1.data)
        const res2 = await api.post(`api/pizzaToppings`, { pizzaId: pizzaId, toppingId: toppingId })
        logger.log(res2.data)
    }
}

export const pizzasService = new PizzasService();