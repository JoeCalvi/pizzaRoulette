<template>
    <div class="PizzaPage">
        this is the pizza page
    </div>
</template>


<script>
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { pizzasService } from '../services/PizzasService';
import { onMounted } from 'vue';

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

        return {}
    }
}
</script>


<style lang="scss" scoped></style>