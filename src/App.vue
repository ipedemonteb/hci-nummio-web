<template>
  <v-app>
    <AppHeader />
    
    <v-main>
      <SideMenu />
    </v-main>

    <!-- <AppFooter /> -->
  </v-app>
</template>

<script setup>
  import AppHeader from './components/AppHeader.vue';
  import SideMenu from './components/SideMenu.vue';
</script>
