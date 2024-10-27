<template>
    <div class="makeTransfer">
        <h2 class="mainTitle">Transferir:</h2>
        <div class="transferInput">
            <v-text-field 
                v-model="inputValue" 
                clearable
                variant="outlined" 
                label="Ingrese el alias o CBU/CVU"
                class="input"
                append-icon="mdi-chevron-right"
                @click:append="handleClick"
            >
            </v-text-field>
            
            <v-dialog v-model="dialog" max-width="600px">
                <ConfirmTransfer :closeDialog="closeDialog" />
            </v-dialog>

            <v-snackbar v-model="snackbar" :timeout="3000" color="error">{{ snackbarMessage }}</v-snackbar>
        </div>
    </div>
</template>

<style scoped>
    .makeTransfer {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 30px 40px;
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
        margin-bottom: 20px;
    }
</style>

<script setup>
import { ref } from 'vue';

const dialog = ref(false);
const snackbar = ref(false);
const inputValue = ref('');
const snackbarMessage = ref('Ingrese un alias o CBU/CVU para continuar.');

const handleClick = () => {
    if (inputValue.value) {
        openDialog();
    } else {
        snackbar.value = true;
    }
};


const openDialog = () => {
    dialog.value = true;
};


const closeDialog = () => {
    dialog.value = false;
};
</script>
