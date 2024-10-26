<template>
    <v-container class="confirmTransfer">
        <v-row>
            <h1>Realizar Transferencia:</h1>
        </v-row>
        <v-row>
            <v-container class="dataContainer">
                <div class="dataItem">
                    <h3>Destinatario:</h3>
                    <p>{{ `${userToTransfer.firstName} ${userToTransfer.lastName}` }}</p>
                </div>
                <div class="dataItem">
                    <h3>CVU:</h3>
                    <p>{{ userToTransfer.cvu }}</p>
                </div>
            </v-container>
        </v-row>
        <v-row>
            <v-container class="amountContainer">
                <v-text-field
                    @input="handleAmountInput"
                    clearable
                    variant="outlined"
                    label="Ingrese el monto"
                    class="input"
                >
                </v-text-field>
                <div class="dataItem">
                  <h3>Saldo disponible:</h3>
                  <p>${{ movementsStore.getBalance() }}</p>
                </div>
            </v-container>
        </v-row>
        <v-row class="buttonsRow">
            <v-col class="d-flex justify-center" cols="12">
                <v-btn class="cancelButton mx-2" @click="closeDialog">Cancelar</v-btn>
                <v-btn class="confirmButton mx-2" @click="confirmTransfer()" append-icon="mdi-arrow-right">Confirmar</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
    .confirmTransfer {
        background-color: white;
        border-radius: 10px;
        padding: 50px;
    }

    .dataContainer {
        margin: 10px 0px;
        padding: 0px;
    }

    .dataItem {
        margin: 10px 0px;
        display: flex;
        align-items: center;
    }

    .dataItem h3 {
        margin-right: 6px;
    }

    .dataItem p {
        font-size: 17px;
    }

    .amountContainer {
        margin: 10px 0px;
        padding: 0px;
    }

    .buttonsRow {
        margin-top: 30px !important;
        padding: 0px;
    }

    .confirmButton {
        border-radius: 20px;
        background-color: #5538EE;
        color: white;
        width: 35%;
    }

    .cancelButton {
        border-radius: 20px;
        background-color: white;
        color: #5538EE;
        width: 35%;
    }
</style>

<script setup lang="ts">
import { useMovementsStore } from '@/stores/movements';
import { ref } from 'vue';

const props = defineProps({
  closeDialog: Function,
  userToTransfer: Object
})
const movementsStore = useMovementsStore()
const inputValue = ref('')

const handleAmountInput = (event) => {
  inputValue.value = event.target.value
}

const confirmTransfer = () => {
  const amountToNumber = parseFloat(inputValue.value)
  movementsStore.createMovement(props.userToTransfer, amountToNumber)
  props.closeDialog()
}

</script>
