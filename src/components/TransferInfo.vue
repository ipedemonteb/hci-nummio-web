<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  closeModal: Function,
  cvuRem: String,
  cvuDest: String,
  amount: String,
  date: String
});
</script>

<template>
    <v-container class="detailContainer">
        <v-row class="info">
            <div class="topContainer mainTitle">
                <h2>Detalle de Movimiento:</h2>
                <v-icon icon="mdi-close" class="icon" @click="props.closeModal"/>
            </div>
        </v-row>
        <v-row class="info">
            <v-col cols="12" class="info">
                <p class="text">CVU destinatario:</p>
                <v-text-field
                    density="compact"
                    variant="outlined"
                    :value="props.cvuDest"
                    readonly
                />
            </v-col>
        </v-row>
        <v-row class="info">
            <v-col cols="12" class="info">
                <p class="text">CVU remitente:</p>
                <v-text-field
                    density="compact"
                    variant="outlined"
                    :value="props.cvuRem"
                    readonly
                />
            </v-col>
        </v-row>
        <v-row class="info">
            <v-col cols="6" class="info">
                <p class="text">Fecha:</p>
                <v-text-field
                    density="compact"
                    variant="outlined"
                    :value="props.date"
                    readonly
                    class="date"
                />
            </v-col>
            <v-col cols="6" class="info">
                <p class="text">Monto:</p>
                <v-text-field
                    density="compact"
                    variant="outlined"
                    :value="props.amount"
                    readonly
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.detailContainer {
    display: block !important;
    padding: 30px;
    min-width: 600px;
    perspective: 1000px;
}

.topContainer {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
    margin-bottom: 8px;
    color: #6B4EFF;
}

.info {
    width: 100%;
    margin: 0px;
    padding: 0px;
}

.date {
    margin-right: 20px;
}
</style>
