<script setup>
import { ref, computed } from 'vue';

const amount = ref('');
const paymentMethod = ref('');
const selectedCard = ref('');
const balance = ref('5000');
const cards = ['Visa - ****1234', 'Mastercard - ****5678', 'American Express - ****9012'];
const invoiceCode = ref('');

const confirmPayment = () => {
    alert('Pago confirmado');
};

const cancelPayment = () => {
    amount.value = '';
    paymentMethod.value = '';
    selectedCard.value = '';
    invoiceCode.value = '';
};

const isFormValid = computed(() => {
    return amount.value && paymentMethod.value && (paymentMethod.value !== 'Tarjeta de crédito' || selectedCard.value);
});
</script>

<template>
    <div class="payService">
        <v-container>
            <div class="title">
                <h1 class="mainTitle">Pagar Servicio:</h1>
            </div>
            <div class="input">
                <p class="text">Ingresá el código de la factura:</p>
                <v-text-field
                    variant="outlined"
                    label="Código"
                    placeholder="Código"
                    v-model="invoiceCode"
                    clearable
                />
            </div>
            <div class="input">
                <p class="text">Ingresá el monto de la factura:</p>
                <v-text-field
                    variant="outlined"
                    label="Monto"
                    v-model="amount"
                    type="number"
                    min="1"
                    placeholder="Ingresa el monto"
                    prefix="$"
                />
            </div>
            <div class="input">
                <p class="text">Selecciona el método de pago:</p>
                <v-select
                    variant="outlined"
                    :items="['Cuenta', 'Tarjeta de crédito']"
                    v-model="paymentMethod"
                    label="Método de Pago"
                    placeholder="Selecciona un método"
                    clearable
                />
            </div>
            <div v-if="paymentMethod === 'Cuenta'">
                <p class="amountText">Saldo disponible en cuenta: ${{ balance }}</p>
            </div>
            <div v-if="paymentMethod === 'Tarjeta de crédito'" class="selectCard">
                <p class="text">Selecciona la tarjeta:</p>
                <v-select
                    variant="outlined"
                    :items="cards"
                    v-model="selectedCard"
                    label="Tarjeta de Crédito"
                    placeholder="Selecciona una tarjeta"
                    clearable
                />
            </div>

            <v-row v-if="isFormValid">
                <v-col cols="6" class="d-flex justify-center">
                    <v-btn variant="outlined" rounded="xl" @click="cancelPayment">Cancelar</v-btn>
                </v-col>
                <v-col cols="6" class="d-flex justify-center">
                    <v-btn variant="outlined" rounded="xl" class="confirm" @click="confirmPayment">Confirmar</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
.payService {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
}

.title {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}

.text {
    color: #6B4EFF;
    margin: 10px 0px;
}

.amountText {
    color: #858585;
    margin-top: -20px;
    margin-bottom: 40px;
}

.selectCard {
    margin-bottom: 20px;
}

.v-text-field, .v-select {
    margin-bottom: 8px;
}

.input {
    margin: 20px 0px;
}

.v-btn {
    border-radius: 40px;
    background-color: #5538EE;
    color: white;
    width: 200px;
    margin-bottom: 40px;
}

.confirm {
    background-color: white;
    color: #5538EE;
}
</style>
