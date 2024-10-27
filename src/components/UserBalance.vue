<template>
    <div class="balance">
        <div class="balanceContainer">
            <h2 class="mainTitle">Saldo Actual:</h2>
            <div class="infoContainer">
                <h2>{{ isVisible ? `$ ${balance}` : '$ • • • • • • •' }}</h2>
                <v-icon
                    color="black"
                    size="large"
                    @click="toggleVisibility"
                >
                    {{ isVisible ? 'mdi-eye' : 'mdi-eye-off' }}
                </v-icon>
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
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>

<script setup>
import { ref } from 'vue';

const props = defineProps({
        balance: Number
    });

const isVisible = ref(true);

function toggleVisibility() {
    isVisible.value = !isVisible.value;
}


</script>
