<script setup>

import RecentPurchase from '@/components/RecentPurchase.vue';
import { useCardsStore } from '@/stores/cards';
import CreditCards from '@/components/CreditCards.vue';
import { computed } from 'vue';

const cardsStore = useCardsStore();
const cards = computed(() => cardsStore.getUserCreditCards())
</script>

<template>
    <div class="contentContainer">
      <div class="columnContainer half-width">
        <CreditCards :cards="cards"/>
      </div>
      <div class="columnContainer half-width">
        <RecentPurchase />
      </div>
    </div>
</template>

<style scoped>

</style>
