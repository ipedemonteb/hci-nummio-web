<template>
  <!-- <v-app> -->
    <main>
      <div class="column">
        <AppHeader />
        <div class="row app-content">
          <SideMenu />
          <div class="viewContainer">
            <RouterView />
          </div>
        </div>
      </div>
    </main>
    <!-- <AppFooter /> -->
  <!-- </v-app> -->
</template>

<style>
  .row {
    display: flex;
    flex-direction: row;
  }

  .column {
    display: flex;
    flex-direction: column;
  }
</style>

<style scoped>
  .app-content {
    margin-top: 110px;
  }
</style>

<script setup>
  import AppHeader from './components/AppHeader.vue';
  import SideMenu from './components/SideMenu.vue';
</script>
