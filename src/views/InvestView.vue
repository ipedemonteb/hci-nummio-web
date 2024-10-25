<script setup lang="ts">
import StockMarket from '@/components/StockMarket.vue';
import UserInvestments from '@/components/UserInvestments.vue';
</script>

<template>
    <div class="contentContainer">
        <div class="columnContainer half-width">
            <UserInvestments />
        </div>
        <div class="columnContainer half-width">
            <StockMarket />
        </div>
    </div>
    <div class="contentContainer">
        <div class="columnContainer full-width">
            
        </div>    
    </div>
</template>

<style scoped>

</style>
  