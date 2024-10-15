<template>
    <div class="movements">
        <h2>Últimos Movimientos:</h2>

        <div class="historyContainer">
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
</script>
