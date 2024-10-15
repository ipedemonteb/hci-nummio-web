<script setup lang="ts">
  import UserBalance from '@/components/UserBalance.vue';
  import UserMovements from '@/components/UserMovements.vue';
  import FrequentlyContact from '@/components/FrequentlyContact.vue';
  import WalletCards from '@/components/WalletCards.vue';
</script>

<template>
  <div class="contentContainer">
    <div class="columnContainer half-width">
      <UserBalance/>
      <UserMovements/>
    </div>
    <div class="columnContainer half-width">
      <FrequentlyContact/>
      <WalletCards/>
    </div>
  </div>
</template>