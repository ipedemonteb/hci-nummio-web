<template>
    <div class="repeatMovement">
        <h2 class="mainTitle">Repetir Transferencia:</h2>
        <div class="repeatMovements">
            <MovementBox
                v-for="(movement) in sourceMovements"
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
    .repeatMovement {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 30px 40px;
        flex: 1;
    }

    .searchBar {
        margin: 10px 0px;
        padding-top: 10px;
        width: 320px;
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

    .repeatMovements {
        display: flex;
        flex-direction: column;
        margin: 20px 0px;
    }

</style>

<script setup>
import { computed } from 'vue';
import MovementBox from './MovementBox.vue';
import { useMovementsStore } from '@/stores/movements';
import { useRouter } from 'vue-router';

const movementsStore = useMovementsStore()
const sourceMovements = computed(() => movementsStore.getSourceMovements())
const router = useRouter()

const goToPage = () => {
  router.push('/movimientos')
}
</script>
