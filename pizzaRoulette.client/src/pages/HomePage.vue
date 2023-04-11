<template>
  <div class="container-fluid">
    <div class="row page-height">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <div class="glass-card">
          <!-- <PizzaForm /> -->
          <img class="pizza-img" src="https://www.svgrepo.com/show/49346/italian-pizza-cut-into-slices.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { toppingsService } from "../services/ToppingsService";
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState';
import PizzaForm from '../components/PizzaForm.vue';

export default {
  setup() {

    async function getAllToppings() {
      try {
        await toppingsService.getAllToppings();
      }
      catch (error) {
        Pop.error(error);
        logger.log(error);
      }
    }

    onMounted(() => {
      getAllToppings();
    });

    return {
      toppings: computed(() => AppState.toppings),

      generateRandomPizza() {
        toppingsService.generateRandomPizza();
      }
    };
  },
  components: { PizzaForm }
}
</script>

<style scoped lang="scss">
.page-height {
  height: 84vh;
}

.glass-card {
  background-color: rgba(100, 108, 105, 0.731);
  padding: 5vw;
  padding-bottom: 4vw;
  border-radius: 10%;
  color: white;
  text-shadow: 1px 1px 2px black;
}

.pizza-img {
  width: 30vw;
  transform: rotateZ(180);
}
</style>
