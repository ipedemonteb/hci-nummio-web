<script setup>
import RecentPurchase from '@/components/RecentPurchase.vue';
import CreditCards from '@/components/CreditCards.vue';

</script>

<template>
    <div class="contentContainer">
      <div class="columnContainer half-width">
        <CreditCards />
      </div>
      <div class="columnContainer half-width">
        <RecentPurchase />
      </div>
    </div>
</template>

<style scoped>
  
</style>