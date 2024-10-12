<template>
  <v-app>
    <AppHeader />
    
    <v-main>
      <SideMenu />
      <!-- <UserBalance />
      <UserMovements />
      <FrequentlyContact /> -->
    </v-main>

    <!-- <AppFooter /> -->
  </v-app>
</template>

<style scoped>

</style>

<script setup>
  import AppHeader from './components/AppHeader.vue';
import FrequentlyContact from './components/FrequentlyContact.vue';
  import SideMenu from './components/SideMenu.vue';
  import UserBalance from './components/UserBalance.vue';
import UserMovements from './components/UserMovements.vue';
</script>
