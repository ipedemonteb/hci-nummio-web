<template>
  <!-- <v-app> -->
    <main class="mainPage">
      <div class="col full-width">
        <AppHeader />
        <div class="row app-content">
          <SideMenu />
          <div class="view-container">
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

  .col {
    display: flex;
    flex-direction: column;
  }

  .full-width {
    width: 100%;
  }

  .half-width {
    width: 50%;
  }
</style>

<style scoped>
  .mainPage {
    height: 100vh;
    overflow: hidden;
  }
  
  .app-content {
    margin-top: 110px;
    display: flex;
    height: calc(100vh - 110px);
  }

  .view-container {
    width: 85%; /* @TODO: ver si hay manera de que se detecte el ancho restante en vez de hacer esto */
    height: 100%;
    flex-grow: 1;
    overflow-y: auto;
  }
</style>

<script setup>
  import AppHeader from './components/AppHeader.vue';
  import SideMenu from './components/SideMenu.vue';
</script>
