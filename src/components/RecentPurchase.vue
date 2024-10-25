<template>
    <div class="recentPurchase">
        <h1>Consumos Recientes:</h1>
        <div class="selectors">
            <v-select
          clearable
          label="Filtrar Por"
          :items="['Mas Recientes', 'Mas Antiguos', 'Monto Mayor', 'Monto Menor']"
          variant="outlined"
          class="selectContainer"
        ></v-select>
            <SearchBar class="searchBar"/>
        </div>
        <div class="purchaseContainer">
            <!-- @TODO: analizar tema ya no dice Pago Realizado.
                        quizas lo mas correcto es hacer otra componente pues la data es distinta -->
            <MovementBox
                v-for="(movement) in sourceMovements"
                :key="movement.id"
                :otherUser="movement.otherUser"
                :amount="movement.amount"
                :timeAgo="movement.timeAgo"
                :isSent="movement.isSent"
            />
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
        margin: 20px 0px;
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
        max-height: 590px;
        flex: 1;
    }

</style>

<script setup>
    import SearchBar from './SearchBar.vue';
    import { useMovementsStore } from '@/stores/movements';

    const movementsStore = useMovementsStore()
    const sourceMovements = movementsStore.getSourceMovements()

</script>
