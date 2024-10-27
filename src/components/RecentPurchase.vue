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
            <MovementBox action="Pago Realizado" source="Fernando Alonso" amount="500.00" timeAgo="2 horas"/>
            <MovementBox action="Pago Realizado" source="Fernando Alonso" amount="500.00" timeAgo="2 horas"/>
            <MovementBox action="Pago Realizado" source="Fernando Alonso" amount="500.00" timeAgo="2 horas"/>
            <MovementBox action="Pago Realizado" source="Fernando Alonso" amount="500.00" timeAgo="2 horas"/>
            <MovementBox action="Pago Realizado" source="Fernando Alonso" amount="500.00" timeAgo="2 horas"/>
            <MovementBox action="Pago Realizado" source="Fernando Alonso" amount="500.00" timeAgo="2 horas"/>
            <MovementBox action="Pago Realizado" source="Fernando Alonso" amount="500.00" timeAgo="2 horas"/>
            <MovementBox action="Pago Realizado" source="Fernando Alonso" amount="500.00" timeAgo="2 horas"/>
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
        margin-top: 25px;
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
    import SearchBar from './SearchBar.vue';
</script>