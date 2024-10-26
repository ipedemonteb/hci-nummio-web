<script setup>
import RecentPurchase from '@/components/RecentPurchase.vue';
import { useCardsStore } from '@/stores/cards';

const cardsStore = useCardsStore();

</script>

<template>
    <div class="contentContainer">
      <div class="columnContainer half-width">
        <CreditCards  :cards="cardsStore.getUserCreditCards()"/>
        <DebitCards :cards="cardsStore.getUserDebitCards() " />
      </div>
      <div class="columnContainer half-width">
        <RecentPurchase />  
      </div>
    </div>
</template>

<style scoped>
  
</style>