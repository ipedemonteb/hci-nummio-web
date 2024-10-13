<template>
    <div class="makeTransfer">
        <div class="makeTransferContainer">
            <h1>Transferir:</h1>
            <div class="transferInput">
                <v-text-field 
                    variant="outlined" 
                    label="Ingrese el alias o CBU/CVU"
                    class="input"
                    append-icon="mdi-chevron-right"
                    >
                </v-text-field>
            </div>
            <p class="balance">Saldo: $12.100,15</p>
        </div>
    </div>
</template>

<style scoped>
    .makeTransfer {
        margin: 30px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        border-radius: 10px;
    }

    .makeTransferContainer {
        margin: 30px 40px;
    }

    .transferInput {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
    }

    .balance {
        padding: 5px 0px;
        color: #5e5e5e;
        margin-bottom: 40px;
    }
</style>

<script setup>

</script>