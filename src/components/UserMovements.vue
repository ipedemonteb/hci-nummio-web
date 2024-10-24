<template>
    <div class="movements">
        <h2>Últimos Movimientos:</h2>

        <div class="historyContainer">
            <MovementBox 
                v-for="(movement, index) in lastMovements" 
                :key="movement.id" 
                :action="movement.action" 
                :source="movement.source" 
                :amount="movement.amount" 
                :timeAgo="movement.timeAgo"
                :isSent="movement.isSent"
            />
        </div>
        <div class="buttonContainer">
            <RouterLink to="/movimientos">
                <v-btn variant="outlined" rounded="xl" class="button">
                    Ver Más
                </v-btn>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .movements {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 30px 40px;
        flex: 1;
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
        width: 200px;
    }

</style>

<script setup>
import MovementBox from './MovementBox.vue';
import { defineProps } from 'vue';

const props = defineProps({
    lastMovements: {
        type: Array,
        required: true,
        default: () => []
    }
});
</script>
