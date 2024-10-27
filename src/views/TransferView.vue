<template>
  <div class="contentContainer">
    <div class="columnContainer full-width">
      <MakeTransfer/>
      <RepeatMovement/>
    </div>
  </div>
</template>

<script setup>
  import MakeTransfer from '@/components/MakeTransfer.vue';
  import RecentContacts from '@/components/RecentContacts.vue';
  import RepeatMovement from '@/components/RepeatMovement.vue';
</script>
