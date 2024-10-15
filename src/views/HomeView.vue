<script setup lang="ts">
  import UserBalance from '@/components/UserBalance.vue';
  import UserMovements from '@/components/UserMovements.vue';
  import FrequentlyContact from '@/components/FrequentlyContact.vue';
</script>

<template>
  <div class="row">
    <div class="col">
      <UserBalance/>
      <UserMovements/>
    </div>
    <div class="col">
      <FrequentlyContact/>
      <WalletCards/>
    </div>
  </div>
</template>
