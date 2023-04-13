import { AppState } from "../AppState";
import { logger } from "../utils/Logger"
import { api } from "./AxiosService";
import { Topping } from "../models/Topping.js";
import { Sauce } from "../models/Sauce.js";
import { Cheese } from "../models/Cheese";
import { Meat } from "../models/Meat";
import { Veggie } from "../models/Veggie";
import { Fruit } from "../models/Fruit";

class ToppingsService {

    async getAllToppings() {
        const res = await api.get('api/toppings')
        const toppings = res.data.filter(t => t.type != "Sauce")
        AppState.toppings = toppings.map(t => new Topping(t))

        const sauces = res.data.filter(t => t.type == "Sauce")
        AppState.sauces = sauces.map(s => new Sauce(s))

        const cheese = AppState.toppings.filter(t => t.type == "Cheese")
        AppState.cheese = cheese.map(c => new Cheese(c))


        const meats = AppState.toppings.filter(t => t.type == "Meat")
        AppState.meatToppings = meats.map(m => new Meat(m))


        const veggies = AppState.toppings.filter(t => t.type == "Vegetable" || t.type == "Herb" || t.type == "Spice")
        AppState.vegetableToppings = veggies.map(v => new Veggie(v))

        const fruits = AppState.toppings.filter(t => t.type == "Fruit")
        AppState.fruitToppings = fruits.map(f => new Fruit(f))


        // logger.log('Appstate Toppings:', AppState.toppings)
        // logger.log('Appstate Sauces:', AppState.sauces)
        // logger.log('Appstate Cheese:', AppState.cheese)
        // logger.log('Appstate MeatToppings:', AppState.meatToppings)
        // logger.log('Appstate VeggieToppings:', AppState.vegetableToppings)
        // logger.log('Appstate Fruits:', AppState.fruitToppings)
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
    }
}

export const toppingsService = new ToppingsService();