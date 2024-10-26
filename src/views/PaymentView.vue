<script setup>
import GeneratePayment from '@/components/GeneratePayment.vue';


</script>

<template>
    <div class="contentContainer">
        <v-container fluid class="payment">
            <v-row justify="center" class="mb-5">
                <h1 class="title">Generar Cobro: </h1>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <GeneratePayment />
                </v-col>
            </v-row>
        </v-container> 
    </div>
</template>

<style scoped>
.payment {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #ccc;
    padding: 60px 100px;
    border-radius: 10px;
}
</style>