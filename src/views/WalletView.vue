<script setup>
import RecentPurchase from '@/components/RecentPurchase.vue';


</script>

<template>
    <div class="contentContainer">
      <div class="columnContainer half-width">
        <CreditCards />
        <DebitCards />
      </div>
      <div class="columnContainer half-width">
        <RecentPurchase />
      </div>
    </div>
</template>

<style scoped>
  
</style>