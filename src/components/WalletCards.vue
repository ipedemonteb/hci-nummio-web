<template>
    <div class="wallet">
        <h2 class="mainTitle">Tarjetas:</h2>

        <div class="cardStack">
            <WalletBox />
        </div>

        <div class="buttonContainer">
            <v-btn variant="outlined" rounded="xl" class="button" @click="goToPage">
                    Ver Más
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

    .cardStack {
        position: relative;
    }    

    .buttonContainer {
        display: flex;
        justify-content: center;
        margin: 0px 0px;
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
import { useCardsStore } from '@/stores/cards';
import SmallCard from './SmallCard.vue';
import { ref } from 'vue';

const router = useRouter()
const cardsStore = useCardsStore()
const cards = ref(cardsStore.getUserCreditCards().reverse())


const goToPage = () => {
  router.push('/billetera')
}

</script>