<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex flex-column justify-content-center align-items-center">
        <button @click="generateRandomPizza()" class="btn btn-danger"><i class="mdi mdi-pizza"></i></button>
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

export default {
  setup() {

    async function getAllToppings() {
      try {
        await toppingsService.getAllToppings()
      } catch (error) {
        Pop.error(error)
        logger.log(error)
      }
    }

    onMounted(() => {
      getAllToppings()
    })
    return {
      toppings: computed(() => AppState.toppings),

      generateRandomPizza() {
        toppingsService.generateRandomPizza()
      }

    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
