<template>
    <div class="recentPurchase">
        <h2 class="mainTitle">Consumos Recientes:</h2>
        <div class="selectors">
            <v-select
          clearable
          label="Filtrar Por"
          density="compact"
          :items="['Mas Recientes', 'Mas Antiguos', 'Monto Mayor', 'Monto Menor']"
          variant="outlined"
          class="selectContainer"
        ></v-select>
            <SearchBar class="searchBar"/>
        </div>
        <div class="purchaseContainer">
            <!-- @TODO: analizar tema ya no dice Pago Realizado.
                        quizas lo mas correcto es hacer otra componente pues la data es distinta -->
            <!-- <MovementBox
                v-for="(movement) in sourceMovements"
                :key="movement.id"
                :otherUser="movement.otherUser"
                :amount="movement.amount"
                :timeAgo="movement.timeAgo"
                :isSent="movement.isSent"
            /> @TODO: resolver bien para que tome los pagos con tarjeta-->
            <CardMovement action="Pago Realizado" source=".... 2543" amount="500.00" timeAgo="2 horas"/>
            <CardMovement action="Pago Realizado" source=".... 8736" amount="750.00" timeAgo="2 horas"/>
            <CardMovement action="Pago Realizado" source=".... 8736" amount="200.00" timeAgo="2 horas"/>
            <CardMovement action="Pago Realizado" source=".... 2543" amount="430.00" timeAgo="2 horas"/>
            <CardMovement action="Pago Realizado" source=".... 9375" amount="345.00" timeAgo="2 horas"/>
            <CardMovement action="Pago Realizado" source=".... 2543" amount="100.00" timeAgo="2 horas"/>
            <CardMovement action="Pago Realizado" source=".... 9375" amount="235.00" timeAgo="2 horas"/>
        </div>
    </div>
</template>

<style scoped>
    .recentPurchase {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 30px 40px;
        flex: 1;
    }

    .selectors {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    }

    .searchBar {
        width: 200px;
    }

    .selectContainer {
        max-width: 150px;
    }

    .purchaseContainer {
        border: 1px solid #ccc;
        padding: 10px;
        overflow-y: auto;
        max-height: 400px;
        flex: 1;
    }

</style>

<script setup>

import CardMovement from './CardMovement.vue';
import SearchBar from './SearchBar.vue';
import { useMovementsStore } from '@/stores/movements';

const movementsStore = useMovementsStore()
const sourceMovements = movementsStore.getSourceMovements()

</script>
