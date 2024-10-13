<template>
  <v-app>
    <!-- <AppHeader /> -->
    
    <v-main>
      <!-- <SideMenu /> -->
      <UserBalance />
      <UserMovements />
      <FrequentlyContact />
      <WalletCards />
      <RecentContacts />
      <MakeTransfer />
      <RepeatMovement />
    </v-main>

    <!-- <AppFooter /> -->
  </v-app>
</template>

<style scoped>

</style>

<script setup>
  import AppHeader from './components/AppHeader.vue';
import FrequentlyContact from './components/FrequentlyContact.vue';
import MakeTransfer from './components/MakeTransfer.vue';
import RecentContacts from './components/RecentContacts.vue';
import RepeatMovement from './components/RepeatMovement.vue';
import SearchBar from './components/SearchBar.vue';
  import SideMenu from './components/SideMenu.vue';
  import UserBalance from './components/UserBalance.vue';
import UserMovements from './components/UserMovements.vue';
import WalletCards from './components/WalletCards.vue';
</script>
