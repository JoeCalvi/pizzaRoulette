import { AppState } from "../AppState";
import { logger } from "../utils/Logger"
import { api } from "./AxiosService";

class ToppingsService {

    async getAllToppings() {
        const res = await api.get('api/toppings')
        AppState.toppings = res.data.filter(t => t.type != "Sauce")
        const sauces = res.data.filter(t => t.type == "Sauce")
        AppState.sauces = sauces

        const cheese = AppState.toppings.filter(t => t.type == "Cheese")
        AppState.cheese = cheese


        const meats = AppState.toppings.filter(t => t.type == "Meat")
        AppState.meatToppings = meats


        const veggies = AppState.toppings.filter(t => t.type == "Vegetable" || t.type == "Herb" || t.type == "Spice")
        AppState.vegetableToppings = veggies


        // logger.log('Appstate Toppings:', AppState.toppings)
        // logger.log('Appstate Sauces:', AppState.sauces)
        // logger.log('Appstate Cheese:', AppState.cheese)
        // logger.log('Appstate MeatToppings:', AppState.meatToppings)
        // logger.log('Appstate VeggieToppings:', AppState.vegetableToppings)
    }

    generateRandomPizza() {
        let sauceRoll = Math.floor(Math.random() * (AppState.sauces.length))
        let sauce = AppState.sauces[sauceRoll]

        let cheese = AppState.cheese.find(c => c.name == "Mozzarella")

        let toppingsRoll1 = Math.floor(Math.random() * (AppState.toppings.length))
        let topping1 = AppState.toppings[toppingsRoll1]
        let toppingsRoll2 = Math.floor(Math.random() * (AppState.toppings.length))
        let topping2 = AppState.toppings[toppingsRoll2]
        let toppingsRoll3 = Math.floor(Math.random() * (AppState.toppings.length))
        let topping3 = AppState.toppings[toppingsRoll3]

        AppState.pizza = {
            "Sauce": sauce,
            "Cheese": cheese,
            "Topping1": topping1,
            "Topping2": topping2,
            "Topping3": topping3
        }
        logger.log("Your Pizza, sir:", AppState.pizza)
    }
}

export const toppingsService = new ToppingsService();