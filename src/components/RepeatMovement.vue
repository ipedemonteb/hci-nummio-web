<template>
    <div class="repeatMovement">
        <div class="repeatMovementContainer">
            <h1>Repetir Transferencia:</h1>
            <div class="searchBar">
                <SearchBar/>
            </div>
            <div class="repeatMovements">
                <MovementBox />
                <MovementBox />
                <MovementBox />
                <MovementBox />
                <MovementBox />
                <MovementBox />
            </div>
            <div class="buttonContainer">
                <v-btn variant="outlined" rounded="xl" class="button">
                     Ver Más
                </v-btn>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .repeatMovement {
        margin: 30px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        border-radius: 10px;
    }

    .repeatMovementContainer {
        margin: 30px 40px;
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

</style>

<script setup>
import MovementBox from './MovementBox.vue';
import SearchBar from './SearchBar.vue';


</script>