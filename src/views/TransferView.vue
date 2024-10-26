<template>
  <div class="contentContainer">
    <div class="columnContainer half-width">
      <MakeTransfer/>
      <RecentContacts :freqContacts="contactsStore.getContacts()"/>
    </div>
    <div class="columnContainer half-width">
      <RepeatMovement/>
    </div>
  </div>
</template>

<script setup>
  import MakeTransfer from '@/components/MakeTransfer.vue';
  import RecentContacts from '@/components/RecentContacts.vue';
  import RepeatMovement from '@/components/RepeatMovement.vue';
  import { useContactsStore } from '@/stores/contacts';

  const contactsStore = useContactsStore();
</script>
