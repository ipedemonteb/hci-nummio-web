<template>
    <div class="movements">
        <div class="movementsContainer">
            <h2>Últimos Movimientos:</h2>
            
            <div class="historyContainer">
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
    .movements {
        margin: 30px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        border-radius: 10px;
    }

    .movementsContainer {
        margin: 30px 40px;
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
</script>
