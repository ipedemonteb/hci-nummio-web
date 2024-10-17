<template>
    <div class="balance">
        <div class="balanceContainer">
            <h2>Saldo</h2>
            <div class="infoContainer">
                <h2>$ 1000.00</h2>
                <v-icon color="black" size="large" icon="mdi-eye"></v-icon>
            </div>
        </div>

    </div>
</template>

<style scoped>
    .balance {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        border-radius: 10px;
        padding-bottom: 20px;
    }

    .balanceContainer {
        background-color: rgb(255, 255, 255);
        margin: 20px 30px;
    }

    .infoContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

</style>

<script setup>

</script>

