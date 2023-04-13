<template>
    <form @submit.prevent="createPizza()">
        <div class="mb-3">
            <select v-model="editable.pizzaFrom" class="form-select border border-danger"
                aria-label="Default select example">
                <option value="Home">Home</option>
                <option value="Domino's">Domino's</option>
                <option value="Little Caesar's">Little Caesar's</option>
                <option value="Papa John's">Papa John's</option>
                <option value="Papa Murphy's">Papa Murphy's</option>
                <option value="Pizza Hut">Pizza Hut</option>
            </select>
        </div>
        <div class="mb-3">
            <select v-model="editable.toppings" class="form-select border border-danger"
                aria-label="Default select example">
                <option selected>How many toppings do you want?</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
            </select>
        </div>
        <div class="mb-3">
            <select v-model="editable.restriction" class="form-select border border-danger"
                aria-label="Default select example">
                <option selected>Do you have any restrictions?</option>
                <option value="None">None</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Nut Allergy">Nut Allergy</option>
            </select>
        </div>
        <div class="mb-4 d-flex justify-content-center">
            <div class="form-check">
                <input class="form-check-input border border-danger" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    I'm feeling CRAZY.
                </label>
            </div>
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn-danger" title="Generate My Pizza"><i class="mdi mdi-pizza"></i></button>
        </div>
    </form>
</template>


<script>
import { ref } from 'vue';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { pizzasService } from "../services/PizzasService.js";
import { useRouter } from 'vue-router';
import { AppState } from '../AppState';

export default {
    setup() {
        const editable = ref({
            pizzaFrom: "Home",
            toppings: 2,
            restriction: "None"
        })
        const router = useRouter()

        return {
            editable,
            router,

            async createPizza() {
                try {
                    const pizzaData = editable.value
                    await pizzasService.createPizza(pizzaData)
                    router.push({ name: 'Pizza', params: { pizzaId: AppState.pizza?.id } })
                } catch (error) {
                    logger.error(error)
                    Pop.error(error)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped></style>