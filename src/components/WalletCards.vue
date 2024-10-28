<template>
    <div class="wallet">
        <h2 class="mainTitle">Tarjetas:</h2>

        <div class="cardStack">
            <SmallCard v-for="(card, index) in cards" class="smallCard" :key="card.id" :cardholderName="card.cardHolder" :cardNumber="card.number.toString()" :expiryDate="`${card.expirationMonth}/${card.expirationYear}`" backgroundImage="/Violeta.jpeg"  :cvv="card.CVV" :bankName="card.cardBank" :style="{ 
            zIndex: index+1,
            top: 50, 
            position: absolute,
            transform: `translateY(${index * 40}px)`,
            marginBottom: index === cards.length - 1 ? '0' : '-200px',
            }"
            />
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
        height: 300px; /* Adjust based on your card height */
        margin-bottom: 20px;
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