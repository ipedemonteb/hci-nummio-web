<script setup lang="ts">
  import UserBalance from '@/components/UserBalance.vue';
  import UserMovements from '@/components/UserMovements.vue';
  import FrequentlyContact from '@/components/FrequentlyContact.vue';
</script>

<template>
  <div class="row full-width">
      <div class="col half-width">
        <UserBalance/>
        <UserMovements/>
    </div>
    <div class="col half-width">
      <FrequentlyContact/>
      <WalletCards/>
    </div>
  </div>
</template>
