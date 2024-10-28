<script setup>
import { ref } from 'vue';

const amount = ref('');
const concept = ref('');
const paymentLink = ref('');
const cvuNumber = ref('1234567890123456789012');
const concepts = ['Varios', 'Servicios', 'Productos', 'Donación'];
const showLink = ref(false);
const alertMessage = ref('');
const alertType = ref('');

const generatePaymentLink = () => {
    if (amount.value && concept.value) {
        paymentLink.value = `https://nummio.com/pagar?monto=${amount.value}&concepto=${encodeURIComponent(concept.value)}`;
        showLink.value = true;
    } else {
        showAlert('Completa todos los campos para generar el link', 'error');
    }
};

const copyToClipboard = () => {
    navigator.clipboard.writeText(paymentLink.value)
        .then(() => {
            showAlert('Link copiado al portapapeles', 'success');
        })
        .catch(err => {
            showAlert('Error al copiar el link', 'error');
        });
};

const showAlert = (message, type) => {
    alertMessage.value = message;
    alertType.value = type;
    setTimeout(() => {
        alertMessage.value = '';
        alertType.value = '';
    }, 3000);
};
</script>

<template>
    <v-container >
        <v-row align-content="left">
            <v-col cols="12">
                <p class="text">Ingresá el monto a cobrar:</p>
                <v-text-field
                    variant="outlined"
                    label="Monto"
                    v-model="amount"
                    type="number"
                    min="1"
                    placeholder="Ingresa el monto"
                    prefix="$"
                />
            </v-col>

            <v-col cols="12">
                <p class="text">Ingresá el concepto del cobro:</p>
                <v-select
                    variant="outlined"
                    :items="concepts"
                    v-model="concept"
                    label="Concepto"
                    placeholder="Selecciona un concepto"
                />
            </v-col>

            <v-col cols="12">
                <p class="text">Número de CVU a acreditar:</p>
                <v-text-field
                    variant="outlined"
                    label="CVU"
                    v-model="cvuNumber"
                    readonly
                />
            </v-col>

            <v-col cols="12" v-if="showLink" class="link-container">
                <div class="generated-link">
                    <span>{{ paymentLink }}</span>
                    <v-icon icon="mdi-content-copy" class="copy-icon" @click="copyToClipboard"/>
                </div>
            </v-col>

            <v-col cols="12" class="center-button">
                <v-btn variant="outlined" rounded="xl" class="button" @click="generatePaymentLink">Generar Link de Pago</v-btn>
            </v-col>
        </v-row>

        <div v-if="alertMessage" :class="['alert-message', alertType]">
            {{ alertMessage }}
        </div>
    </v-container>
</template>

<style scoped>
.v-btn {
    border-radius: 20px;
    background-color: #5538EE;
    color: white;
}

.v-text-field, .v-select {
    margin-top: 15px;
}

.link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.generated-link {
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
    color: #333;
    font-weight: bold;
    max-width: 100%;
    overflow: auto;
}

.copy-icon {
    color: #6B4EFF;
    margin-left: 10px;
    cursor: pointer;
}

.center-button {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}

.alert-message {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    text-align: center;
    width: auto;
    max-width: 80%;
    z-index: 9999;
}

.button {
    border-radius: 40px;
    background-color: white;
    color: #5538EE;
}

.text {
    color: #6B4EFF;
}

.alert-message.success {
    background-color: #4CAF50;
}

.alert-message.error {
    background-color: #f44336;
}
</style>
