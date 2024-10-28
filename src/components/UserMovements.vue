<template>
    <div class="movements">
        <h2 class="mainTitle">Últimos Movimientos:</h2>

        <div class="historyContainer">
            <MovementBox
                v-for="(movement) in limitedMovements"
                :key="movement.id"
                :otherUser="movement.otherUser"
                :amount="movement.amount"
                :timeAgo="movement.timeAgo"
                :isSent="movement.isSent"
            />
        </div>
        <div class="buttonContainer">
          <v-btn variant="outlined" rounded="xl" class="button" @click="goToPage">
              Ver Más
          </v-btn>
        </div>
    </div>
</template>

<style scoped>
    .movements {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 30px 40px;
        max-height: 600px;
    }

    .historyContainer {
        display: flex;
        flex-direction: column;
        margin: 20px 0px;
    }

    .buttonContainer {
        display: flex;
        justify-content: center;
        margin: 30px 0px;
    }

    .button {
        border-radius: 40px;
        background-color: white;
        color: #5538EE;
        width: 200px;
    }

</style>

<script setup>
import MovementBox from './MovementBox.vue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    lastMovements: {
        type: Array,
        required: true,
        default: () => []
    }
});

const router = useRouter();

const goToPage = () => {
  router.push('/movimientos');
};

const limitedMovements = computed(() => props.lastMovements.slice(0, 5));
</script>
