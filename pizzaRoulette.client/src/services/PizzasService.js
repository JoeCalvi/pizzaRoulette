
class PizzasService {

    async createPizza() {
        const res = await api.post('api/pizzas')
    }
}

export const pizzasService = new PizzasService();