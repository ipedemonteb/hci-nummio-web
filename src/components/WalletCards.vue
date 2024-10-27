<template>
    <div class="wallet">
        <h2 class="mainTitle">Billetera:</h2>

        <WalletBox />

        <div class="buttonContainer">
            <v-btn variant="outlined" rounded="xl" class="button" @click="goToPage">
                    Ver Todas
            </v-btn>
        </div>
    </div>
</template>

<style scoped>
    .wallet {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 30px 40px;
    }

    .buttonContainer {
        display: flex;
        justify-content: center;
        margin: 30px 0px;
    }

    .button {
        border-radius: 40px;
        background-color: white;
        color: #5538EE;
        width: 200px;
    }

</style>

<script setup>
import WalletBox from './WalletBox.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const goToPage = () => {
  router.push('/billetera')
}

</script>