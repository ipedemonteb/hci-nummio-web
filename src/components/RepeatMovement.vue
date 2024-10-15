<template>
    <div class="repeatMovement">
        <h1>Repetir Transferencia:</h1>
        <!-- <div class="searchBar">
            <SearchBar/>
        </div> -->
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
            <v-btn variant="outlined" rounded="xl" class="button">
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
import SearchBar from './SearchBar.vue';


</script>