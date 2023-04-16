<template>
    <div class="PizzaPage">
        <div class="container-fluid">
            <div class="row justify-content-center page-height">
                <div class="col-6 d-flex justify-content-center align-items-center">
                    <div class="glass-card text-center">
                        <div v-for="p in pizzaToppings" class="d-flex justify-content-between mb-3">
                            <h2>{{ p?.topping.name }}</h2>
                            <button class="btn btn-danger text-white"><i class="mdi mdi-sync"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { pizzasService } from '../services/PizzasService';
import { onMounted, computed, onUnmounted } from 'vue';
import { AppState } from '../AppState';

export default {
    setup() {
        const route = useRoute()

        async function getPizzaById() {
            try {
                const pizzaId = route.params.pizzaId
                await pizzasService.getPizzaById(pizzaId)
            } catch (error) {
                logger.error(error)
                Pop.error(error)
            }
        }

        async function getToppingsByPizzaId() {
            try {
                const pizzaId = route.params.pizzaId
                await pizzasService.getToppingsByPizzaId(pizzaId)
            } catch (error) {
                logger.error(error)
                Pop.error(error)
            }
        }

        onMounted(() => {
            getPizzaById();
            getToppingsByPizzaId();
        })

        onUnmounted(() => {
            AppState.pizzaToppings = [];
        })

        return {
            pizzaToppings: computed(() => AppState.pizzaToppings),

            async respinPizzaTopping() {

            }
        }
    }
}
</script>


<style lang="scss" scoped>
.page-height {
    height: 84vh;
}

.glass-card {
    background-color: rgba(100, 108, 105, 0.731);
    padding: 5vw;
    padding-bottom: 4vw;
    width: 100%;
    border-radius: 10%;
    color: white;
    text-shadow: 1px 1px 2px black;
}
</style>