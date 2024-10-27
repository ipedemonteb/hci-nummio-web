<template>
    <div class="repeatMovement">
        <h2 class="mainTitle">Repetir Transferencia:</h2>
        <div class="repeatMovements">
            <MovementBox action="Transferencia enviada" source="Fernando Alonso" amount="500.00" timeAgo="2 horas"/>
            <MovementBox action="Transferencia enviada" source="Fernando Alonso" amount="500.00" timeAgo="2 horas"/>
            <MovementBox action="Transferencia enviada" source="Fernando Alonso" amount="500.00" timeAgo="2 horas"/>
            <MovementBox action="Transferencia enviada" source="Fernando Alonso" amount="500.00" timeAgo="2 horas"/>
            <MovementBox action="Transferencia enviada" source="Fernando Alonso" amount="500.00" timeAgo="2 horas"/>
            <MovementBox action="Transferencia enviada" source="Fernando Alonso" amount="500.00" timeAgo="2 horas"/>
            <MovementBox action="Transferencia enviada" source="Fernando Alonso" amount="500.00" timeAgo="2 horas"/>
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
import MovementBox from './MovementBox.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const goToPage = () => {
  router.push('/movimientos')
}
</script>