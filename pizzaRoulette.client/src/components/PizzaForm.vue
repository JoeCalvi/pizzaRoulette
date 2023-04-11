<template>
    <form @submit.prevent="">
        <div class="mb-3">
            <select class="form-select border border-danger" aria-label="Default select example">
                <option selected>Where are you eating?</option>
                <option value="1">Home</option>
                <option value="2">Domino's</option>
                <option value="3">Little Caesar's</option>
                <option value="4">Papa John's</option>
                <option value="5">Papa Murphy's</option>
                <option value="6">Pizza Hut</option>
            </select>
        </div>
        <div class="mb-3">
            <select class="form-select border border-danger" aria-label="Default select example">
                <option selected>How many toppings do you want?</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
            </select>
        </div>
        <div class="mb-3">
            <select class="form-select border border-danger" aria-label="Default select example">
                <option selected>Do you have any restrictions?</option>
                <option value="1">None</option>
                <option value="2">Vegetarian</option>
                <option value="3">Nut Allergy</option>
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
// import { pizzasService } from "../services/PizzasService.js";

export default {
    setup() {
        const editable = ref({})

        return {
            editable,

            // async createPizza() {
            //     try {
            //         await pizzasService.createPizza()
            //     } catch (error) {
            //         logger.error(error)
            //         Pop.error(error)
            //     }
            // }
        }
    }
}
</script>


<style lang="scss" scoped></style>